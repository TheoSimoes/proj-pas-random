import { Player } from "./Player";

class Program {
  public static main() {
    const lucas = new Player();
    const florent = new Player();
    const vivien = new Player();
    const gianni = new Player();
    const gaspar = new Player();
    const theo = new Player();

    lucas.atk(florent);
  }
}

Program.main();