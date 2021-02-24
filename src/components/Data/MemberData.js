const MemberData = [
  {
    title: "登入",
    titleExplain: "透過您FindRestaurant帳號登入",
    input: [
      { placeholder: "電子信箱", className: "email" },
      { placeholder: "密碼", className: "password" },
    ],
    button: "登入",
    text: "現在就前往體驗FindRestaurant",
    link: "註冊",
  },
  {
    title: "註冊",
    titleExplain: "註冊您專屬的FindRestaurant帳號",
    input: [
      { placeholder: "名稱", className: "text" },
      { placeholder: "電子信箱", className: "email" },
      { placeholder: "密碼", className: "password" },
      { placeholder: "再次輸入密碼", className: "password" },
    ],
    button: "註冊",
    text: "已經是FindRestaurant會員了？",
    link: "登入",
  },
];

export default MemberData;
