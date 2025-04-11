import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

export const menuItems = (): MenuItem[] => {
    const navigate = useNavigate();

    return [
        // {
        //     label: "Phong cách",
        //     icon: "fi fi-rr-tags",
        //     items: [
        //         {
        //             label: "Thời trang",
        //             icon: "fi fi-rr-tshirt",
        //             command: () => navigate("/fashion"),
        //         },
        //         {
        //             label: "Làm đẹp",
        //             icon: "fi fi-rr-palette",
        //             command: () => navigate("/beauty"),
        //         },
        //     ],
        // },
        // {
        //     label: "Bản thân",
        //     icon: "fi fi-rr-user",
        //     items: [
        //         {
        //             label: "Sức khỏe",
        //             icon: "fi fi-rr-heart",
        //             command: () => navigate("/wellness"),
        //         },
        //         {
        //             label: "Công việc & Tiền bạc",
        //             icon: "fi fi-rr-briefcase",
        //             command: () => navigate("/work-money"),
        //         },
        //         {
        //             label: "Mối quan hệ",
        //             icon: "fi fi-rr-users",
        //             command: () => navigate("/relationships"),
        //         },
        //         {
        //             label: "Làm cha mẹ",
        //             icon: "fi fi-rr-baby",
        //             command: () => navigate("/parenthood"),
        //         },
        //     ],
        // },
        // {
        //     label: "Nhà cửa",
        //     icon: "fi fi-rr-home",
        //     items: [
        //         {
        //             label: "Trang trí",
        //             icon: "fi fi-rr-paint-brush",
        //             command: () => navigate("/decor"),
        //         },
        //         {
        //             label: "Ẩm thực",
        //             icon: "fi fi-rr-utensils",
        //             command: () => navigate("/food"),
        //         },
        //         {
        //             label: "Không rác thải",
        //             icon: "fi fi-rr-recycle",
        //             command: () => navigate("/zero-waste"),
        //         },
        //         {
        //             label: "Quà tặng",
        //             icon: "fi fi-rr-gift",
        //             command: () => navigate("/gifts"),
        //         },
        //     ],
        // },
        // {
        //     label: "Văn hóa",
        //     icon: "fi fi-rr-globe",
        //     items: [
        //         {
        //             label: "Hoạt động xã hội",
        //             icon: "fi fi-rr-bullhorn",
        //             command: () => navigate("/activism"),
        //         },
        //         {
        //             label: "Sống chậm",
        //             icon: "fi fi-rr-clock",
        //             command: () => navigate("/slow-living"),
        //         },
        //         {
        //             label: "Truyền thông",
        //             icon: "fi fi-rr-book",
        //             command: () => navigate("/media"),
        //         },
        //     ],
        // },
        {
            label: "Bản tin",
            icon: "fi fi-rr-envelope",
            command: () => navigate("/newsletter"),
        },
        {
            label: "Giới thiệu",
            icon: "fi fi-rr-info",
            items: [
                {
                    label: "Giới thiệu",
                    icon: "fi fi-rr-info",
                    command: () => navigate("/about"),
                },
                {
                    label: "Quảng cáo",
                    icon: "fi fi-rr-bullseye",
                    command: () => navigate("/advertise"),
                },
                {
                    label: "Tuyển dụng",
                    icon: "fi fi-rr-briefcase",
                    command: () => navigate("/careers"),
                },
            ],
        },
        {
            label: "Tìm kiếm",
            icon: "fi fi-rr-search",
            command: () => navigate("/search"),
        },
    ];
};