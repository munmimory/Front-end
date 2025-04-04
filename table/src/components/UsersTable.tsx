import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Import spinner component
import DarkModeToggle from "./DarkModeToggle";
import Pagination from "./Pagination";

import {
  FaEdit,
  FaTrashAlt,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

interface TUser {
  id: string;
  name: string;
  balance: number;
  email: string;
  registerAt: string;
  active: boolean;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    fetchUsers();
  }, [page, rowsPerPage]);

  const fetchUsers = async () => {
    setLoading(true); // Đặt loading là true khi bắt đầu tải dữ liệu
    try {
      // Giả lập độ trễ 5 giây (5000 ms) để spinner kịp hiển thị
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Giả sử tải dữ liệu từ file users.json
      const response = await fetch("/users.json");
      const data = await response.json();

      setUsers(data);
      setTotalPages(Math.ceil(data.length / rowsPerPage)); // Tính tổng số trang
      setLoading(false); // Đặt loading là false khi tải xong dữ liệu
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false); // Đảm bảo set loading là false ngay cả khi có lỗi
    }
  };

  const handleEdit = (userId: string) => {
    console.log(`Sửa người dùng với ID: ${userId}`);
    // Bạn có thể thêm logic để chỉnh sửa người dùng ở đây (ví dụ: hiển thị modal chỉnh sửa)
  };

  const handleDelete = (userId: string) => {
    console.log(`Xóa người dùng với ID: ${userId}`);
    // Bạn có thể thêm logic để xóa người dùng ở đây (ví dụ: gọi API để xóa)
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };
  

  return (
    <div>
      {loading ? (
        <Loader /> // Hiển thị spinner khi dữ liệu đang được tải
      ) : (
        <table>
          <thead className="table-head">
            <tr>
              <th>
                <input type="checkbox" /> Name
              </th>
              <th>Balance ($)</th>
              <th>Email</th>
              <th>Registration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((user) => (
                <tr key={user.id}>
                  <td>
                    <input type="checkbox" /> {user.name}
                  </td>
                  <td>
                    {user.balance.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>
                    <div className="user-email">
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </div>
                  </td>
                  <td title={user.registerAt}>
                    {new Date(user.registerAt).toLocaleDateString()}
                  </td>
                  <td className="">
                    <div className="status">
                      <span>Status</span>
                    </div>
                  </td>

                  <td>
                    <button onClick={() => handleEdit(user.id)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default UserTable;
