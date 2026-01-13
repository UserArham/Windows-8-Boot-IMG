// Import types if needed
declare var V86Starter: any;

function startEmulator(imgPath: string) {
    const screen = document.getElementById("v86screen");
    if (!screen) return;

    const emulator = new V86Starter({
        wasm_path: "https://copy.sh/v86/build/v86.wasm",
        memory_size: 512 * 1024 * 1024,
        vga_memory_size: 16 * 1024 * 1024,
        screen_container: screen,
        bios: { url: "https://copy.sh/v86/bios/seabios.bin" },
        vga_bios: { url: "https://copy.sh/v86/bios/vgabios.bin" },
        hda: { url: imgPath }
    });

    return emulator;
}

// Example usage
const startButton = document.getElementById("start-btn");
startButton?.addEventListener("click", () => {
    startEmulator("disk-images/windows8.img");
});
