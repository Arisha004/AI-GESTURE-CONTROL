# AI Gesture Control

An AI-powered web application that detects and interprets **hand gestures** in real-time using computer vision and machine learning.  
Built with **React + TypeScript**, **TensorFlow.js**, and styled with **shadcn/ui**.

![Project Mockup](https://i.postimg.cc/3xZJ8Mck/gesture-control-project-mockup.png)

---

## ✨ Features
- **Real-Time Gesture Detection** using TensorFlow.js
- **Three Supported Gestures**:
  - 👍 **Thumbs Up**
  - ✌️ **Peace**
  - 🖐 **Open Palm**
- Modern UI built with **shadcn/ui** and **Tailwind CSS**
- Runs entirely in the browser — no server required
- Scalable for adding more gestures in the future

---

## 📂 Project Structure

```
workspace
│── public/
│── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   │   ├── draw-utils.ts
│   │   ├── gesture-detector.ts
│   │   ├── tensorflow-setup.ts
│   │   └── utils.ts
│   └── pages/
│       ├── Index.tsx
│       └── NotFound.tsx
│── index.html
│── package.json
│── tsconfig.json
│── README.md
```

---

## 🛠 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/gesture-control.git
cd gesture-control
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 🚀 Usage

1. Allow camera access in your browser.  
2. Perform one of the supported gestures (**Thumbs Up**, **Peace**, **Open Palm**).  
3. The app will detect and display the recognized gesture in real-time.  

---

## 🛠 Technologies Used

- **React** + **TypeScript**
- **TensorFlow.js**
- **shadcn/ui**
- **Tailwind CSS**
- **Vite**

---

## 📌 Future Plans
- Add more gestures (fist, okay sign, wave)
- Improve detection accuracy
- Support multi-hand gesture recognition
- Add sound or haptic feedback
