export class Amiibo {
  constructor(
    public name: string,
    public character: string,
    public amiiboSeries: string,
    public gameSeries: string,
    public image: string,
    public release: object[]
  ) {}
}
