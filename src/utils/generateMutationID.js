import { v4 as uuidv4 } from 'uuid';

export default (username) => username + "_" + Date.now() + "_" + uuidv4()