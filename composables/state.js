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
export const useGender = () => useState("gender", () => null)
export const useOccupation = () => useState("occupation", () => null)
export const useNationality = () => useState("nationality", () => null)

export const useWeeklySleepHours = () => useState("weeklysleephours", () => 0)

export const usePersonalInfoSteps = () => useState("personalinfostep", () => 0)
export const useSlidersSteps = () => useState("slidersSteps", () => 0)

export const useCurrentViewName = () => useState("currentViewName", () => "welcome")
// can either be
// - welcome
// - personal
// - sleep
// - sliders

export const useCurrentMobileView = () => useState("currentMobileView", () => "Dateneingabe");
// can either be Dateninput or Visualisierung

export const useEndSliderValue = () => useState("endSliderValue", () => 0);

export const visualizationPercentLeftTop = () => useState("visualizationPercentLeftTop", () => 25)
export const visualizationPercentLeftBottom = () => useState("visualizationPercentLeftBottom", () => 25)
export const visualizationPercentRightTop = () => useState("visualizationPercentRightTop", () => 25)
export const visualizationPercentRightBottom = () => useState("visualizationPercentRightBottom", () => 25)

export const bottomBarLeftTopPercent = () => useState("bottomBarLeftTopPercent", () => 0)
export const bottomBarLeftBottomPercent = () => useState("bottomBarLeftBottomPercent", () => 0)
export const bottomBarRightTopPercent = () => useState("bottomBarRightTopPercent", () => 0)
export const bottomBarRightBottomPercent = () => useState("bottomBarRightBottomPercent", () => 0)
