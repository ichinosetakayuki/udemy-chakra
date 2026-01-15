import { Routes, Route } from "react-router-dom"
import Login from "@/components/pages/Login"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}