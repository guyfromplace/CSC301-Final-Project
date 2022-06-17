const CPU_SLIDER_FILTERABLES = [
    "Cores",
    "Power",
    "Price"
];
const CPU_CHECK_FILTERABLES = [
    "Manufacturer"
];

const MOBO_SLIDER_FILTERABLES = [
    "Price"
];
const MOBO_CHECK_FILTERABLES = [
    "Manufacturer",
    "CPU_Socket",
    "Form_Factor"
];

const GPU_SLIDER_FILTERABLES = [
    "Clock",
    "VRAM",
    "Price"
];
const GPU_CHECK_FILTERABLES = [
    "Manufacturer",
    "Chipset_Manufacturer",
    "Interface"
];

const PS_SLIDER_FILTERABLES = [
    "Power",
    "Price"
];
const PS_CHECK_FILTERABLES = [
    "Manufacturer",
    "Efficiency_Rating"
];

const RAM_SLIDER_FILTERABLES = [
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const RAM_CHECK_FILTERABLES = [
    "Manufacturer",
    "Type"
];

const STORAGE_SLIDER_FILTERABLES = [
    "Price"
];
const STORAGE_CHECK_FILTERABLES = [
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol"
];

const CASE_SLIDER_FILTERABLES = [
    "Price"
];
const CASE_CHECK_FILTERABLES = [
    "Manufacturer",
    "Color",
    "Form_Factor"
];

export const SLIDER_FILTERABLES = {
    "CPU": CPU_SLIDER_FILTERABLES,
    "Motherboard": MOBO_SLIDER_FILTERABLES,
    "GPU": GPU_SLIDER_FILTERABLES,
    "Power Supply": PS_SLIDER_FILTERABLES,
    "RAM": RAM_SLIDER_FILTERABLES,
    "Storage": STORAGE_SLIDER_FILTERABLES,
    "Case": CASE_SLIDER_FILTERABLES,
};

export const CHECK_FILTERABLES = {
    "CPU": CPU_CHECK_FILTERABLES,
    "Motherboard": MOBO_CHECK_FILTERABLES,
    "GPU": GPU_CHECK_FILTERABLES,
    "Power Supply": PS_CHECK_FILTERABLES,
    "RAM": RAM_CHECK_FILTERABLES,
    "Storage": STORAGE_CHECK_FILTERABLES,
    "Case": CASE_CHECK_FILTERABLES,
};