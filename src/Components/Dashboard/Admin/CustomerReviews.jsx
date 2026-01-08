import React, { useState } from "react";
import { Star, MessageCircle, Flag, Reply } from "lucide-react";

const reviewsData = [
  {
    id: "ORD-1023",
    customer: "Amit Sharma",
    status: "Completed",
    rating: 5,
    review: "Food was amazing and delivery was super fast!",
    date: "12 Jan 2026",
  },
  {
    id: "ORD-1041",
    customer: "Neha Verma",
    status: "Cancelled",
    rating: 2,
    review: "Order got cancelled after long wait.",
    date: "10 Jan 2026",
  },
  {
    id: "ORD-1088",
    customer: "Rahul Mehta",
    status: "Completed",
    rating: 4,
    review: "Great taste, packaging could be better.",
    date: "08 Jan 2026",
  },
];

const CustomerReviews = () => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-md p-4 border hover:shadow-lg transition-all"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold">{review.customer}</p>
                <p className="text-sm text-gray-500">
                  Order Ref: {review.id} • {review.date}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  review.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {review.status}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i <= review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {review.rating}/5
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-4">{review.review}</p>

            {/* Actions */}
            <div className="flex gap-4 text-sm">
              <button
                onClick={() => setReplyingTo(review.id)}
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Reply size={16} /> Reply
              </button>
              <button className="flex items-center gap-1 text-red-600 hover:underline">
                <Flag size={16} /> Report
              </button>
            </div>

            {/* Reply Box */}
            {replyingTo === review.id && (
              <div className="mt-4 bg-gray-50 p-3 rounded-xl">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply..."
                  className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring"
                  rows={3}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyText("");
                    }}
                    className="px-4 py-1 text-sm rounded-lg border"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-1 text-sm rounded-lg bg-blue-600 text-white"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
