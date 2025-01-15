import { Button, ImgUpload } from "../../common";
import Modal from "../../common/Modal/Modal";
import classes from "./PostCommentModal.module.css";

const PostCommentModal = ({
  isActive,
  onClose,
  comment,
  setComment,
  setCommentImage,
  handlePostComment,
}) => {
  return (
    <Modal isActive={isActive} onClose={onClose} heading="Add Comment">
      <div className={classes.threadInput}>
        <textarea
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your Comment"
          className={classes.textarea}
          rows={4}
        />
        <ImgUpload setImage={setCommentImage} />
        <div className={classes.buttonContainer}>
          <Button primitive800 onClick={onClose}>
            Cancel
          </Button>
          <Button wFull onClick={handlePostComment}>
            Post Comment
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PostCommentModal;
