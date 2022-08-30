import log from '../config/log';

export { log };

const defaultLogger = log({ tags: ['fixed-window', 'default'] });

export default defaultLogger;
