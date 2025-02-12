import {defineConfig, presetWind} from "unocss";

export default defineConfig({
    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx,cs,razor,cshtml}"]
    },
    presets: [
        presetWind({
            important: "#app"
        })
    ],
    shortcuts: {
        'custom-masa-table': '[&_i.mdi]:before:text-gray-5 [&_th]:border [&_td]:border [&_*]:text-gray-6 [&_*]:border-gray-2 [&_*]:transition-all'
    }
})