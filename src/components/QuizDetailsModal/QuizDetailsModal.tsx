import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz.context";
import { QuizDetailsModalProp } from "./QuizDetailsModal.types";

export const QuizDetailsModal = ({
  setShowModal,
  _id,
  category,
  description,
  playTime,
  image,
  questions,
}: QuizDetailsModalProp): JSX.Element => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const { quizDispatch } = useQuiz();

  const handleCancel = () => {
    return setShowModal(false);
  };

  const handleStartQuiz = () => {
    setShowModal(false);
    quizDispatch({ type: "START_QUIZ", payload: { quizId: _id } });
    quizDispatch({ type: "INITIALIZE_QUES_NUMBER_AND_SCORE" });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                    >
                      Quiz Details
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark: text-gray-100">
                        Topic: {category}
                      </p>
                      <p className="text-sm text-gray-500">
                        Negative Marking: -1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Link to={`/quiz/${_id}`}>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:hover sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      handleStartQuiz();
                    }}
                  >
                    Start
                  </button>
                </Link>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-gray-50  text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                    handleCancel();
                  }}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
