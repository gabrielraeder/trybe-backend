class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn():void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
Available connections: ${this._connections}`,
    );
  }

  get conns() {
    return this._connections;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connTo(conn: string | undefined) {
    const conns = this.conns;
    if (!conn || conns.includes(conn)) {
      this._connectedTo = conn;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
// tv1.turnOn();
tv1.connTo = 'HDMI';
console.log('Connected to:', tv1.connectedTo);
