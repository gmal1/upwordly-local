import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/index';

const ModalCloseButton = ({ context, label }) => {
  return (
    <button
      className="block border rounded text-pink-200 border-pink-200 bg-bg2 hover:border-transparent hover:text-bg2 hover:bg-pink-200 hover:border-pink-200 text-lg mt-4 mx-2 px-3 py-2 font-apercu"
      type="button"
      onClick={() => context.closeWidget()}
    >
      <FontAwesomeIcon icon={faTimesCircle} className="pr-2" />
      {label}
    </button>
  );
};

export default ModalCloseButton;
