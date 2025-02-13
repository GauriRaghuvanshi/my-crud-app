import { useForm } from "react-hook-form";

const PostForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 p-4">
      <input {...register("title")} className="input input-bordered w-full mb-2" placeholder="Title" />
      <textarea {...register("body")} className="textarea textarea-bordered w-full mb-2" placeholder="Body"></textarea>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};
export default PostForm;