const CPU_HEADERS = [
    "CPU",
    "Manufacturer",
    "Speed",
    "Cores",
    "TDP",
    "Rating",
    "Price"
];
const SEARCH_CPU_HEADERS = [
    "Name",
    "Manufacturer",
    "Clock",
    "Cores",
    "Power",
    "Rating",
    "Price"
];
const CPU_FULL_HEADERS = [
    "CPU",
    "Manufacturer",
    "Cores",
    "Speed",
    "Socket",
    "TDP",
    "Stock Cooler Included",
    "Rating",
    "Price"
];
const SEARCH_CPU_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "Cores",
    "Clock",
    "Socket",
    "Power",
    "Stock_Cooler",
    "Rating",
    "Price"
];
const MOBO_HEADERS = [
    "Motherboard",
    "Manufacturer",
    "CPU Socket",
    "Form Factor",
    "Rating",
    "Price"
];
const SEARCH_MOBO_HEADERS = [
    "Name",
    "Manufacturer",
    "CPU_Socket",
    "Form_Factor",
    "Rating",
    "Price"
];
const MOBO_FULL_HEADERS = [
    "Motherboard",
    "Manufacturer",
    "CPU Socket",
    "CPU Chipset",
    "RAM",
    "RAM Slots",
    "Form Factor",
    "PCIE",
    "SATA3 Ports",
    "Wifi",
    "Rating",
    "Price"
];
const SEARCH_MOBO_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "CPU_Socket",
    "CPU_Chipset",
    "RAM",
    "RAM_Slots",
    "Form_Factor",
    "PCIE",
    "SATA3",
    "Wifi",
    "Rating",
    "Price"
];
const GPU_HEADERS = [
    "GPU",
    "Chipset",
    "Manufacturer",
    "Clock",
    "VRAM",
    "Interface",
    "Price"
];
const SEARCH_GPU_HEADERS = [
    "Name",
    "Chipset_Manufacturer",
    "Manufacturer",
    "Clock",
    "VRAM",
    "Interface",
    "Price"
];
const GPU_FULL_HEADERS = [
    "GPU",
    "Chipset",
    "Manufacturer",
    "Speed",
    "VRAM",
    "Interface",
    "Power",
    "Price"
];
const SEARCH_GPU_FULL_HEADERS = [
    "Name",
    "Chipset_Manufacturer",
    "Manufacturer",
    "Clock",
    "VRAM",
    "Interface",
    "Power",
    "Price"
];
const BUILD_HEADERS = [
    "Component",
    "Selection",
    "Price"
];
const PS_HEADERS = [
    "Power Supply",
    "Manufacturer",
    "Power",
    "Efficiency Rating",
    "Price"
];
const SEARCH_PS_HEADERS = [
    "Name",
    "Manufacturer",
    "Power",
    "Efficiency_Rating",
    "Price"
];
const PS_FULL_HEADERS = [
    "Power Supply",
    "Manufacturer",
    "Power",
    "Efficiency Rating",
    "Price"
];
const SEARCH_PS_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "Power",
    "Efficiency_Rating",
    "Price"
];
const RAM_HEADERS = [
    "RAM",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const SEARCH_RAM_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const RAM_FULL_HEADERS = [
    "RAM",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const SEARCH_RAM_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Speed",
    "Capacity",
    "Slots",
    "Price"
];
const STORAGE_HEADERS = [
    "Storage",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Price"
];
const SEARCH_STORAGE_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Price"
];
const STORAGE_FULL_HEADERS = [
    "Storage",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Power",
    "Price"
];
const SEARCH_STORAGE_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "Type",
    "Capacity",
    "Speed",
    "Interface",
    "Protocol",
    "Power",
    "Price"
];
const CASE_HEADERS = [
    "Case",
    "Manufacturer",
    "Form Factor",
    "Colour",
    "Price"
];
const SEARCH_CASE_HEADERS = [
    "Name",
    "Manufacturer",
    "Form_Factor",
    "Color",
    "Price"
];
const CASE_FULL_HEADERS = [
    "Case",
    "Manufacturer",
    "Form Factor",
    "Colour",
    "Price"
];
const SEARCH_CASE_FULL_HEADERS = [
    "Name",
    "Manufacturer",
    "Form_Factor",
    "Color",
    "Price"
];
//Headers for product listing
export const HEADERS = {
    "CPU": CPU_HEADERS,
    "Motherboard": MOBO_HEADERS,
    "GPU": GPU_HEADERS,
    "Power Supply": PS_HEADERS,
    "RAM": RAM_HEADERS,
    "Storage": STORAGE_HEADERS,
    "Case": CASE_HEADERS,
    "BUILD": BUILD_HEADERS
};
//Match above for actual DB column
export const SEARCH_HEADERS = {
    "CPU": SEARCH_CPU_HEADERS,
    "Motherboard": SEARCH_MOBO_HEADERS,
    "GPU": SEARCH_GPU_HEADERS,
    "Power Supply": SEARCH_PS_HEADERS,
    "RAM":SEARCH_RAM_HEADERS,
    "Storage": SEARCH_STORAGE_HEADERS,
    "Case": SEARCH_CASE_HEADERS
};

//Headers for all product info
export const FULL_HEADERS = {
    "CPU": CPU_FULL_HEADERS,
    "Motherboard": MOBO_FULL_HEADERS,
    "GPU": GPU_FULL_HEADERS,
    "Power Supply": PS_FULL_HEADERS,
    "RAM": RAM_FULL_HEADERS,
    "Storage": STORAGE_FULL_HEADERS,
    "Case": CASE_FULL_HEADERS,
    "BUILD": BUILD_HEADERS
};
//Match above for actual DB column
export const SEARCH_FULL_HEADERS = {
    "CPU": SEARCH_CPU_FULL_HEADERS,
    "Motherboard": SEARCH_MOBO_FULL_HEADERS,
    "GPU": SEARCH_GPU_FULL_HEADERS,
    "Power Supply": SEARCH_PS_FULL_HEADERS,
    "RAM":SEARCH_RAM_FULL_HEADERS,
    "Storage": SEARCH_STORAGE_FULL_HEADERS,
    "Case": SEARCH_CASE_FULL_HEADERS
};