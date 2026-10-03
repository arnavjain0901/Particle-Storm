
// PARTICLE STORM - CONTROL PANEL

const panel = document.createElement("div");
panel.id = "particle-controls";

panel.innerHTML = `
    <div class="panel-header">
        <div>
            <h2>STORM CONTROL</h2>
            <p>PARTICLE CUSTOMIZATION</p>
        </div>
        <button id="panel-toggle" title="Hide controls">−</button>
    </div>

    <div id="panel-content">
        <section>
            <label>PARTICLE COLOR</label>
            <div class="color-row">
                <input type="color" id="particle-color" value="#b69cff">
                <span id="color-value">#b69cff</span>
            </div>

            <div class="presets">
                <button class="color-preset" data-color="#b69cff" style="--swatch:#b69cff" title="Purple"></button>
                <button class="color-preset" data-color="#00e5ff" style="--swatch:#00e5ff" title="Cyan"></button>
                <button class="color-preset" data-color="#ff5722" style="--swatch:#ff5722" title="Fire"></button>
                <button class="color-preset" data-color="#39ff88" style="--swatch:#39ff88" title="Emerald"></button>
                <button class="color-preset" data-color="#ff4fd8" style="--swatch:#ff4fd8" title="Pink"></button>
                <button class="color-preset" data-color="#ffffff" style="--swatch:#ffffff" title="White"></button>
            </div>
        </section>

        <section>
            <div class="slider-heading">
                <label for="particle-size">PARTICLE SIZE</label>
                <span id="size-value">0.045</span>
            </div>
            <input type="range" id="particle-size" min="0.01" max="0.12" step="0.005" value="0.045">
        </section>

        <section>
            <div class="slider-heading">
                <label for="glow-level">GLOW INTENSITY</label>
                <span id="glow-value">90%</span>
            </div>
            <input type="range" id="glow-level" min="10" max="100" value="90">
        </section>

        <section>
            <label for="manual-effect">MANUAL EFFECT</label>
            <select id="manual-effect">
                <option value="GESTURE">Hand Gesture Mode</option>
                <option value="IDLE">Particle Sphere</option>
                <option value="EXPLOSION">Explosion</option>
                <option value="COMPRESSION">Compression</option>
                <option value="VORTEX">Vortex</option>
                <option value="FOCUS">Energy Focus</option>
            </select>
        </section>

        <button id="reset-controls">RESET SETTINGS</button>
    </div>
`;

document.body.appendChild(panel);

// Panel styling
const style = document.createElement("style");
style.textContent = `
#particle-controls {
    position: fixed;
    top: 90px;
    right: 24px;
    width: 265px;
    z-index: 20;
    color: #eeeaff;
    background: rgba(12, 10, 30, 0.88);
    border: 1px solid rgba(167, 139, 250, 0.3);
    border-radius: 14px;
    backdrop-filter: blur(18px);
    box-shadow: 0 0 35px rgba(139, 92, 246, 0.12);
    font-family: Arial, sans-serif;
    overflow: hidden;
}

#particle-controls * {
    box-sizing: border-box;
}

#particle-controls .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 17px;
    border-bottom: 1px solid rgba(167, 139, 250, 0.2);
}

#particle-controls h2 {
    font-size: 13px;
    letter-spacing: 2px;
}

#particle-controls .panel-header p {
    margin-top: 5px;
    font-size: 9px;
    letter-spacing: 1.5px;
    color: #a5a0c5;
}

#particle-controls button {
    cursor: pointer;
}

#panel-toggle {
    width: 28px;
    height: 28px;
    border: 1px solid #65558c;
    border-radius: 7px;
    background: #211a3d;
    color: white;
    font-size: 19px;
}

#panel-content {
    padding: 17px;
}

#panel-content section {
    margin-bottom: 22px;
}

#particle-controls label {
    display: block;
    margin-bottom: 12px;
    font-size: 10px;
    letter-spacing: 1.5px;
    color: #c4b5fd;
}

.color-row {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: #d8d3f5;
}

#particle-color {
    width: 42px;
    height: 32px;
    border: 1px solid #75659c;
    border-radius: 7px;
    background: transparent;
    cursor: pointer;
}

.presets {
    display: flex;
    gap: 10px;
    margin-top: 14px;
}

.color-preset {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--swatch);
    border: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 0 10px var(--swatch);
}

.color-preset:hover {
    transform: scale(1.15);
}

.slider-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slider-heading span {
    font-size: 11px;
    color: #e9d5ff;
}

#particle-controls input[type="range"] {
    width: 100%;
    accent-color: #a78bfa;
    cursor: pointer;
}

#manual-effect {
    width: 100%;
    padding: 10px;
    color: #eeeaff;
    background: #211a3d;
    border: 1px solid #65558c;
    border-radius: 8px;
    outline: none;
    font-size: 11px;
}

#reset-controls {
    width: 100%;
    padding: 11px;
    border: 1px solid rgba(167,139,250,0.4);
    border-radius: 8px;
    background: rgba(139,92,246,0.15);
    color: #e9d5ff;
    font-size: 10px;
    letter-spacing: 1.5px;
}

#reset-controls:hover {
    background: rgba(139,92,246,0.3);
}

#particle-controls.collapsed #panel-content {
    display: none;
}

@media (max-width: 650px) {
    #particle-controls {
        top: 75px;
        right: 12px;
        width: 230px;
    }
}
`;
document.head.appendChild(style);

// Controls
const colorInput = document.getElementById("particle-color");
const colorValue = document.getElementById("color-value");
const sizeInput = document.getElementById("particle-size");
const sizeValue = document.getElementById("size-value");
const glowInput = document.getElementById("glow-level");
const glowValue = document.getElementById("glow-value");
const effectSelect = document.getElementById("manual-effect");

function getColorName(hex) {
    const colors = {
        "#b69cff": "Purple",
        "#00e5ff": "Cyan",
        "#ff5722": "Fire",
        "#39ff88": "Emerald",
        "#ff4dd2": "Pink",
        "#ffffff": "White"
    };

    return colors[hex.toLowerCase()] || "Custom";
}

function sendControl(name, value) {
    if (window.ParticleStormAPI &&
        typeof window.ParticleStormAPI[name] === "function") {
        window.ParticleStormAPI[name](value);
    }
}

function setColor(color) {
    colorInput.value = color;
    colorValue.textContent = getColorName(color);
    sendControl("setColor", color);
}
setColor(colorInput.value);

colorInput.addEventListener("input", () => {
    setColor(colorInput.value);
});

document.querySelectorAll(".color-preset").forEach((button) => {
    button.addEventListener("click", () => {
        setColor(button.dataset.color);
    });
});

sizeInput.addEventListener("input", () => {
    sizeValue.textContent = Number(sizeInput.value).toFixed(3);
    sendControl("setSize", Number(sizeInput.value));
});

glowInput.addEventListener("input", () => {
    glowValue.textContent = glowInput.value + "%";
    sendControl("setGlow", Number(glowInput.value) / 100);
});

effectSelect.addEventListener("change", () => {
    sendControl("setEffect", effectSelect.value);
});

document.getElementById("panel-toggle").addEventListener("click", () => {
    const collapsed = panel.classList.toggle("collapsed");
    document.getElementById("panel-toggle").textContent =
        collapsed ? "+" : "−";
});

document.getElementById("reset-controls").addEventListener("click", () => {
    setColor("#b69cff");

    sizeInput.value = 0.045;
    sizeValue.textContent = "0.045";
    sendControl("setSize", 0.045);

    glowInput.value = 90;
    glowValue.textContent = "90%";
    sendControl("setGlow", 0.9);

    effectSelect.value = "GESTURE";
    sendControl("setEffect", "GESTURE");
});