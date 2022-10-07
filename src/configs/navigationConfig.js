import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },

  {
    type: "groupHeader",
    groupTitle: "Component",
  },

  {
    id: "user",
    title: "User Management ",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "userList",
        title: "Users List",
        type: "item",
        icon: <Icon.Users size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/userList",
      },
      {
        id: "astrologerList",
        title: "Astrologer",
        type: "item",
        icon: <Icon.User size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/astrology/astrologerList",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "Kundli Management",
  },

  {
    id: "kundlidetail",
    title: "Kundli Detail Users",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/kundlimanage/kundliuserdetail",
  },

  {
    id: "kundlimatch",
    title: "Kundli Match Users",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/kundlimanage/kundlimatchlist",
  },

  {
    type: "groupHeader",
    groupTitle: "Horoscope Management",
  },

  {
    id: "rashisoroscopelist",
    title: "Rashi Horoscope ",
    type: "item",
    icon: <Icon.Table size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/rashihoroscope/rashihoroscopelist",
  },

  {
    id: "rashilist",
    title: "Rashi",
    type: "item",
    icon: <Icon.Table size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/categoryhoroscope/rashilist",
  },

  {
    id: "horoscopecategory",
    title: "Horoscope Category",
    type: "item",
    icon: <Icon.FileText size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/horoscope/horoscopecategory",
  },

  {
    id: "horoscope",
    title: "Horoscope",
    type: "item",
    icon: <Icon.FileText size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/categoryhoroscope/catehoroscopelist",
  },

  {
    type: "groupHeader",
    groupTitle: "Porduct Management",
  },

  {
    id: "productmanager",
    title: "Product Management",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    children: [
      {
        id: "categorylist",
        title: "Category List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/categorylist",
      },
      {
        id: "productlist",
        title: "Product List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/productlist",
      },
      {
        id: "astrologerproducts",
        title: "Astrologer Products",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/astrologerproduct",
      },
    ],
  },

  {
    id: "callstatus",
    title: "Call Management ",
    type: "collapse",
    icon: <Icon.PhoneCall size={20} />,
    children: [
      {
        id: "callComplete",
        title: "Complete Call",
        type: "item",
        icon: <Icon.PhoneIncoming size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/callmanagement/callhistory",
      },
      {
        id: "callreject",
        title: "Reject Call",
        type: "item",
        icon: <Icon.PhoneMissed size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/callmanagement/callgreject",
      },
    ],
  },

  {
    id: "chatlist",
    title: "Chat List",
    type: "item",
    icon: <Icon.MessageCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/chat/userchatlist",
  },

  {
    id: "rechargepackage",
    title: "Recharge Package",
    type: "collapse",
    icon: <Icon.Package size={20} />,
    children: [
      {
        id: "allpackage",
        title: "All Package",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/allPackage",
      },
      {
        id: "userrecharge",
        title: "User Recharge",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/userrecharge",
      },
      {
        id: "packageoffer",
        title: "Package Offer",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/packageoffer",
      },
    ],
  },
  {
    id: "predictionList",
    title: "Prediction List",
    type: "item",
    icon: <Icon.BarChart2 size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/prediction/predictionList",
  },

  {
    id: "packageList",
    title: "Package List ",
    type: "item",
    icon: <Icon.Compass size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/poojapackage/packageList",
  },

  {
    id: "discount",
    title: "Discount/offer",
    type: "item",
    icon: <Icon.Percent size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/coupons/couponslist",
  },

  {
    id: "reportstatus",
    title: "Report",
    type: "collapse",
    icon: <Icon.BarChart2 size={20} />,
    children: [
      {
        id: "adminearning",
        title: "Admin Recharge",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/statusList",
      },
      {
        id: "astroearning",
        title: "Astrologer Earning",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/status/daily",
      },
    ],
  },

  {
    id: "withdrawrequest",
    title: "Withdraw Request ",
    type: "item",
    icon: <Icon.DollarSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/withdrawrequestlist",
  },

  {
    id: "blogList",
    title: "Blog Management",
    type: "item",
    icon: <Icon.Video size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/blogmngment/blogList",
  },

  {
    id: "payouts",
    title: "Payouts ",
    type: "item",
    icon: <Icon.DollarSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/payoutlist",
  },

  {
    id: "transaction",
    title: "All Transaction",
    type: "item",
    icon: <Icon.DollarSign size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/transaction/transactionHistory",
  },

  {
    type: "groupHeader",
    groupTitle: "CMS",
  },

  {
    id: "pagesetup",
    title: "Page Setup ",
    type: "collapse",
    icon: <Icon.Settings size={20} />,
    children: [
      {
        id: "bannerList",
        title: "Banner List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/banner/bannerList",
      },
      {
        id: "notifiList",
        title: "Notification List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/notification/notifiList",
      },
      {
        id: "contactus",
        title: "Contact Us",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/contactus/contactUsList",
      },
      {
        id: "aboutUsList",
        title: "About Us",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/aboutus/aboutUsList",
      },
      {
        id: "termsandcondition",
        title: "Terms And Conditions",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/termscondition/termConditionList",
      },
      {
        id: "faqList",
        title: "FAQ List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "privacypolicy",
        title: "Privacy Policy",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/notification/notificationList",
      },
      {
        id: "helpus",
        title: "Help Us",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/helpUs/HelpUs",
      },
    ],
  },
];
export default navigationConfig;
