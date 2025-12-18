# 🎨 Figma UI to TailwindCSS (React + Vite)

## 📌 Giới thiệu

Dự án này được xây dựng với mục tiêu **chuyển đổi (slicing) giao diện từ Figma sang mã nguồn HTML/CSS**, sử dụng:

- **ReactJS + Vite**
- **TailwindCSS**
- Code **thuần UI**, không tập trung xử lý business logic

Mục tiêu chính:

> Hiện thực giao diện Figma **giống thiết kế nhất có thể**, tuân thủ layout, màu sắc, typography và spacing.

---

## 🛠️ Công nghệ sử dụng

- ⚛️ **ReactJS**
- ⚡ **Vite**
- 🎨 **TailwindCSS**
- 🧩 **Figma** (Design source)

---

## 🎯 Phạm vi dự án

- Chỉ tập trung **UI / Layout**
- Không có:
  - Authentication
  - API / Backend
  - State management phức tạp
- Dữ liệu hiển thị là **static (hard-code)**

---

## 🖼️ Nguồn thiết kế

- Figma Design:  
  👉 https://www.figma.com/design/C5UzDP59hB71DieTguRpRz/To-do-List-Web-App-Design--Community-?node-id=16-34&p=f&t=q0K9Ia1YEukiZn3V-0

---

## 📂 Cấu trúc thư mục

```txt
src/
├─ components/    # Các component UI nhỏ
├─ utils/         # Các thư viện UI nhỏ
├─ pages/         # Các trang UI theo từng màn hình Figma
├─ AppRoutes.tsx  # Điều hướng router
├─ App.tsx
└─ main.tsx
```

## 🎨 Quy ước code & UI

- Sử dụng TailwindCSS utility-first
- Không dùng thư viện UI ngoài (MUI, Antd, v.v.)
- Màu sắc & font được map theo thiết kế Figma
- Responsive theo breakpoint:Mobile/Tablet/Desktop

## 📐 Quy trình thực hiện

1. Phân tích layout từ Figma
2. Xác định: Color palette + Font size & spacing + Component tái sử dụng
3. Custom Tailwind theme (@theme trực tiếp trong index.css)
4. Code từng màn hình theo thiết kế
5. Responsive & pixel-perfect (ở mức hợp lý)

## 🚀 Cách chạy project

```base
npm install
npm run dev
```

- Truy cập:
  👉 http://localhost:5173

## 📸 Demo

- Live Demo: https://template-to-do-list-web-app-design.vercel.app

## 📝 Ghi chú

- Dự án phục vụ mục đích luyện tập Frontend & TailwindCSS
- Thiết kế thuộc về tác giả trên Figma
- Không sử dụng cho mục đích thương mại

## 📄 License

Dự án phát hành theo giấy phép [MIT](./LICENSE).
