import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

const propTypes = {
  setFormData: PropTypes.func,
};

function EnterContent({ setFormData }) {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  const handleChange = (content) => {
    setValue(content);
    setFormData((prevData) => ({
      ...prevData,
      content: content,
    }));
  };

  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        내용을 입력해 주세요
      </div>
      <ReactQuill
        theme="snow"
        className="w-full h-[300px] mb-[50px] "
        modules={modules}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

EnterContent.propTypes = propTypes;

export default EnterContent;
