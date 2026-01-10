import React, { useState } from "react";
import { Star, Trash2, Edit, UploadCloud } from "lucide-react";

const RatingReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    orderId: "",
    restaurant: "",
    deliveryPartner: "",
    rating: 0,
    comment: "",
    images: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleStarClick = (value) => {
    setForm({ ...form, rating: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setForm({ ...form, images: previews });
  };

  const handleSubmit = () => {
    if (!form.rating || !form.comment) return;

    if (editingIndex !== null) {
      const updated = [...reviews];
      updated[editingIndex] = form;
      setReviews(updated);
      setEditingIndex(null);
    } else {
      setReviews([...reviews, form]);
    }

    setForm({
      orderId: "",
      restaurant: "",
      deliveryPartner: "",
      rating: 0,
      comment: "",
      images: [],
    });
  };

  const handleEdit = (index) => {
    setForm(reviews[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-5">⭐ Ratings & Reviews</h2>

      {/* Review Form */}
      <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Order ID"
            value={form.orderId}
            onChange={(e) => setForm({ ...form, orderId: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Restaurant Name"
            value={form.restaurant}
            onChange={(e) => setForm({ ...form, restaurant: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Delivery Partner Name"
            value={form.deliveryPartner}
            onChange={(e) =>
              setForm({ ...form, deliveryPartner: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Rating */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              onClick={() => handleStarClick(star)}
              className={`cursor-pointer transition ${
                star <= form.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <textarea
          rows={3}
          placeholder="Write your food & delivery experience..."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Image Upload */}
        <label className="inline-flex items-center gap-2 text-blue-600 cursor-pointer text-sm">
          <UploadCloud size={18} />
          Upload Images
          <input
            type="file"
            multiple
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </label>

        {/* Image Preview */}
        {form.images.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {form.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="preview"
                className="w-16 h-16 rounded-lg object-cover border"
              />
            ))}
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          {editingIndex !== null ? "Update Review" : "Submit Review"}
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews submitted yet</p>
        )}

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 md:p-5 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">
                  {review.restaurant || "Restaurant"}
                </h4>
                <p className="text-sm text-gray-500">
                  Order ID: {review.orderId}
                </p>
                <p className="text-sm text-gray-500">
                  Delivery Partner: {review.deliveryPartner || "—"}
                </p>
              </div>
              <div className="flex gap-3">
                <Edit
                  size={18}
                  className="cursor-pointer text-blue-600"
                  onClick={() => handleEdit(index)}
                />
                <Trash2
                  size={18}
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>

            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`${
                    star <= review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700">{review.comment}</p>

            {review.images.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {review.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="review"
                    className="w-20 h-20 rounded-lg object-cover border"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingReviews;