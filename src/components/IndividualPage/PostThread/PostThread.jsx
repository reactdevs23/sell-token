import React, { useMemo, useState } from "react";
import classes from "./PostThread.module.css";
import { timeAgo } from "utils";
import PostCommentModal from "../../Modal/PostCommentModal/PostCommentModal";
import { Button, Pagination, Text } from "../../common";
import { galaxyGuruImg } from "../../../assets/images";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { dummyComments } from "assets/data";

const PostThread = () => {
  const user = {
    name: "Current User",
    avatar: galaxyGuruImg,
  };
  const [comments, setComments] = useState([...dummyComments]);

  const [newComment, setNewComment] = useState("");
  const [newCommentImage, setNewCommentImage] = useState(null);
  const [showPostCommentModal, setShowPostCommentModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Function to toggle sort order
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Sorted comments based on timestamp
  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.timestamp) - new Date(b.timestamp)
        : new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [comments, sortOrder]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return sortedComments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sortedComments, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, sortedComments.length);

  // Function to handle posting a new thread
  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([
        {
          id: Date.now(),
          content: {
            text: newComment,
            image: newCommentImage,
          },
          upvotes: 0,
          downvotes: 0,
          reaction: null,
          timestamp: new Date().toISOString(),
          user: {
            name: user.name,
            avatar: user.avatar,
          },
        },
        ...comments,
      ]);
      setNewComment("");
      setNewCommentImage(null);
      setShowPostCommentModal(false); // Hide the input after posting
    }
  };

  // Function to handle upvote and downvote
  const handleVote = (id, type) => {
    setComments(
      comments.map((thread) =>
        thread.id === id
          ? {
              ...thread,
              upvotes:
                type === "upvote"
                  ? thread.reaction === "upvote"
                    ? thread.upvotes - 1
                    : thread.upvotes + 1
                  : thread.upvotes,
              downvotes:
                type === "downvote"
                  ? thread.reaction === "downvote"
                    ? thread.downvotes - 1
                    : thread.downvotes + 1
                  : thread.downvotes,
              reaction: thread.reaction === type ? null : type, // Toggle reaction
            }
          : thread
      )
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Text primitive300 base>
          {comments.length < 10 ? `0${comments.length}` : comments.length}{" "}
          threads found
        </Text>
        <div className={classes.buttonContainer}>
          <Button primitive800 onClick={toggleSortOrder}>
            Sort by: Time{" "}
            {`${
              sortOrder === "asc"
                ? "(ASC) ↑"
                : sortOrder === "desc"
                ? "(DESC) ↓"
                : ""
            }`}
          </Button>
          <Button
            primitiveTransparent8
            onClick={() => setShowPostCommentModal(true)}
          >
            Post a Thread
          </Button>
        </div>
      </div>
      <div className={classes.threads}>
        {currentData.map((thread) => (
          <div key={thread.id} className={classes.thread}>
            <div className={classes.threadContent}>
              <div className={classes.userInfo}>
                <img
                  src={thread.user.avatar}
                  alt={thread.user.name}
                  className={classes.avatar}
                />
                <Text medium primitiveDefault>
                  {thread.user.name}
                </Text>
                <Text xs primitive400>
                  {timeAgo(thread.timestamp)}
                </Text>
              </div>
              <Text xs primitive300>
                {thread.content.text}
              </Text>
              {thread.content.image && (
                <img
                  src={thread.content.image}
                  alt="Thread Attachment"
                  className={classes.threadImage}
                />
              )}
            </div>
            <div className={classes.reactions}>
              <button
                onClick={() => handleVote(thread.id, "upvote")}
                className={`${classes.reactionButton} ${
                  thread.reaction === "upvote" ? classes.upvoteActive : ""
                }`}
              >
                <BiSolidLike className={classes.reactionIcon} />
                <Text xs medium className={classes.vote}>
                  {thread.upvotes.toLocaleString()}
                </Text>
              </button>
              <button
                onClick={() => handleVote(thread.id, "downvote")}
                className={`${classes.reactionButton} ${
                  thread.reaction === "downvote" ? classes.downvoteActive : ""
                }`}
              >
                <BiSolidDislike className={classes.reactionIcon} />
                <Text xs medium className={classes.vote}>
                  {thread.downvotes.toLocaleString()}
                </Text>
              </button>
            </div>
          </div>
        ))}

        <div className={classes.paginationInfo}>
          <Text xs primitive500 className={classes.paginationText}>
            Showing {startIndex} to {endIndex} of {sortedComments.length}{" "}
            threads
          </Text>{" "}
          <Pagination
            className={classes.pagination}
            currentPage={currentPage}
            totalCount={sortedComments.length}
            pageSize={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            siblingCount={0}
          />
        </div>
      </div>
      <PostCommentModal
        isActive={showPostCommentModal}
        onClose={() => setShowPostCommentModal(false)}
        handlePostComment={handlePostComment}
        comment={newComment}
        setComment={setNewComment}
        setCommentImage={setNewCommentImage}
      />
    </div>
  );
};

export default PostThread;
