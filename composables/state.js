export const usePriochartVars = () => useState('prioChartVars', () => { return {
    left: {
        top: {
            value: 0
        },
        bottom: {
            value: 0
        }
    },
    right: {
        top: {
            value: 0
        },
        bottom: {
            value: 0
        }
    }
}})

export const usePriochartTopLeft = () => useState("priochartTopLeft", () => 0)
export const usePriochartBottomLeft = () => useState("priochartBottomLeft", () => 0)
export const usePriochartTopRight = () => useState("priochartTopRight", () => 0)
export const usePriochartBottomRight = () => useState("priochartBottomRight", () => 0)

export const useBirthdate = () => useState("birthdate", () => null)