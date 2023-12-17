'use client'

export default function Hello() {
    a();
    return (
        <button onClick={() => alert('hello!')}>
            Click me
        </button>
    );
}

function a() {
    busyWait(100);
    b();
    busyWait(100);
    b();
    busyWait(100);
}

function b() {
    busyWait(150);
}

function busyWait(duration: number) {
    const start = performance.now();
    while (performance.now() - start < duration) {}
}
