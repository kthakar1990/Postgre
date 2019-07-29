interface TimeoutContext {
    message: string; // We must have a message
    [_: string]: any;
}

interface Promise<T> {
    timeout(ms: number, context: TimeoutContext): Promise<T>;
}
