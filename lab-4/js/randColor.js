function randColor() {
    const pastelColors =[
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
    "#E7C6FF", "#FFD6E0", "#F5E1FD", "#E0F7FA", "#F1F8E9",
    "#FFE0B2", "#D1C4E9", "#C8E6C9", "#FFECB3", "#B3E5FC",
    "#F8BBD0", "#DCEDC8", "#FFCCBC", "#D7CCC8", "#F0F4C3"
];

    const index = Math.floor(Math.random() * pastelColors.length);
    return pastelColors[index];
}