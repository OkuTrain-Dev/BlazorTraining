import {defineConfig, presetWind} from "unocss";

export default defineConfig({
    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx,cs,razor,cshtml}"]
    },
    presets: [
        presetWind({
            important: "#app"
        })
    ]
})