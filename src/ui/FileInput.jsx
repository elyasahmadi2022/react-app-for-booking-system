import { FaFileImage } from "react-icons/fa";
import { RiUploadCloud2Line } from "react-icons/ri";

export default function FileInput({
  className,
  message,
  register,
  setValue,
  acccept,
}) {
  function handleClick() {
    document.querySelector("input[type='file'").click();
  }

  function handleChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setValue("cvDocument", e.target.files[0]);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`${className} cursor-pointer relative`}
    >
      <input
        onChange={(e) => handleChange(e)}
        type="file"
        accept={acccept}
        className={"hidden"}
        {...register}
      />
      <RiUploadCloud2Line size={30} className="fill-orange-400" />
      <p className="text-[10px] md:text-sm text-orange-400">{message}</p>
      <div className="text-orange-500 flex items-center gap-0 bg-white border px-4 py-2 rounded-sm cursor-pointer border-orange-200">
        Browse{" "}
        <span>
          <FaFileImage size={20} className="fill-orange-400" />
        </span>
      </div>
    </div>
  );
}
