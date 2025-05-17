"use client"; // 👈 Bắt buộc khi dùng useState, useEffect hoặc event handlers

import { useState } from "react";
import styles from "./lienhe.module.css";

export default function LienHe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liên hệ</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.input}
          name="message"
          placeholder="Nội dung"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <button type="submit" className={styles.button}>Gửi</button>
      </form>
    </div>
  );
}
