import { retrieve } from './src/lib/retrieval';
console.log(retrieve('What is a redox reaction?').map(r => r.chunk.id));
