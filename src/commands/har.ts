import {Command, flags} from '@oclif/command';
import * as fs from 'fs';

export interface HarData {
  log: {
    entries: [
      {
        _resourceType: string;
        request: {url: string};
        time: number;
      },
    ];
  };
}

/**
 * ./bin/run har ~/local23.com.har
 */
export default class Har extends Command {
  static description = 'Export a CSV file from a HAR file';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-o, --output=VALUE)
    output: flags.string({char: 'o', description: 'output file', default: 'export.scv'}),
  };

  async loadHAR(filename: string): Promise<HarData> {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
  }

  static args = [{name: 'file'}];

  async run() {
    const {args, flags} = this.parse(Har);

    const outputFile = flags.output ?? 'export.scv';
    const file = args.file;

    if (file) {
      this.log(`File: ${file}`);
      const dataArray = await this.loadHAR(file);
      let list = dataArray.log.entries
        .filter(e => {
          return e._resourceType === 'script';
        })
        .map(e => {
          return {
            order: 0,
            time: Math.round(e.time * 100) / 100,
            share: '',
            url: e.request.url,
            data: e,
          };
        })
        .sort((a: {time: number}, b: {time: number}) => (a.time > b.time ? -1 : 1));

      let totalMs = list.map(e => e.time).reduce((a, b) => a + b, 0);

      console.log('>>> Total Request: ', list.length);
      console.log('>>> Total ms: ', totalMs);
      let i = 1;
      list.forEach(e => {
        e.order = i;
        e.share = Math.round(((e.time * 100) / totalMs) * 100) / 100 + '%';
        i++;
      });

      const csvWriter = require('csv-writer').createObjectCsvWriter({
        path: outputFile,
        header: [
          {id: 'order', title: 'Order'},
          {id: 'time', title: 'Time'},
          {id: 'share', title: 'Share'},
          {id: 'url', title: 'Url'},
        ],
      });
      csvWriter.writeRecords(list).then(() => console.log(`✅ The CSV file was written successfully (${outputFile})`));
    }
  }
}
