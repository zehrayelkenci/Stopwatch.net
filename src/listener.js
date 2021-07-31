import { startStop, stopWatch} from "./handler.js";
import { reset } from "./handler.js";





document.getElementById('btn-toggle').addEventListener('click',stopWatch);
document.getElementById('btn-toggle').addEventListener('click',startStop);
document.getElementById('btn-reset').addEventListener('click',reset);