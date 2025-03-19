import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

export const menuItems = (): MenuItem[] => {
    const navigate = useNavigate();

    return [
        {
            label: "Style",
            icon: "fi fi-rr-tags",
            items: [
                {
                    label: "Fashion",
                    icon: "fi fi-rr-tshirt",
                    command: () => navigate("/fashion"),
                },
                {
                    label: "Beauty",
                    icon: "fi fi-rr-palette",
                    command: () => navigate("/beauty"),
                },
            ],
        },
        {
            label: "Self",
            icon: "fi fi-rr-user",
            items: [
                {
                    label: "Wellness",
                    icon: "fi fi-rr-heart",
                    command: () => navigate("/wellness"),
                },
                {
                    label: "Work + Money",
                    icon: "fi fi-rr-briefcase",
                    command: () => navigate("/work-money"),
                },
                {
                    label: "Relationships",
                    icon: "fi fi-rr-users",
                    command: () => navigate("/relationships"),
                },
                {
                    label: "Parenthood",
                    icon: "fi fi-rr-baby",
                    command: () => navigate("/parenthood"),
                },
            ],
        },
        {
            label: "Home",
            icon: "fi fi-rr-home",
            items: [
                {
                    label: "Decor",
                    icon: "fi fi-rr-paint-brush",
                    command: () => navigate("/decor"),
                },
                {
                    label: "Food",
                    icon: "fi fi-rr-utensils",
                    command: () => navigate("/food"),
                },
                {
                    label: "Zero Waste",
                    icon: "fi fi-rr-recycle",
                    command: () => navigate("/zero-waste"),
                },
                {
                    label: "Gifts",
                    icon: "fi fi-rr-gift",
                    command: () => navigate("/gifts"),
                },
            ],
        },
        {
            label: "Culture",
            icon: "fi fi-rr-globe",
            items: [
                {
                    label: "Activism",
                    icon: "fi fi-rr-bullhorn",
                    command: () => navigate("/activism"),
                },
                {
                    label: "Slow Living",
                    icon: "fi fi-rr-clock",
                    command: () => navigate("/slow-living"),
                },
                {
                    label: "Media",
                    icon: "fi fi-rr-book",
                    command: () => navigate("/media"),
                },
            ],
        },
        {
            label: "Newsletter",
            icon: "fi fi-rr-envelope",
            command: () => navigate("/newsletter"),
        },
        {
            label: "About",
            icon: "fi fi-rr-info",
            items: [
                {
                    label: "About",
                    icon: "fi fi-rr-info",
                    command: () => navigate("/about"),
                },
                {
                    label: "Advertise",
                    icon: "fi fi-rr-bullseye",
                    command: () => navigate("/advertise"),
                },
                {
                    label: "Careers",
                    icon: "fi fi-rr-briefcase",
                    command: () => navigate("/careers"),
                },
            ],
        },
        {
            label: "Search",
            icon: "fi fi-rr-search",
            command: () => navigate("/search"),
        },
    ];
};