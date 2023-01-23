import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const FresLeafIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 50 50"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fresh Contributors</title>
      <path d="M 11.09375 3 C 10.835938 2.992188 10.574219 3.089844 10.375 3.28125 C 10.074219 3.566406 3 10.410156 3 18.4375 C 3 23.511719 5.132813 27.457031 9.15625 29.9375 C 9.160156 29.941406 9.152344 29.964844 9.15625 29.96875 C 9.632813 31.886719 9.957031 33.625 9.6875 35.25 C 9.597656 35.796875 9.953125 36.285156 10.5 36.375 C 10.554688 36.386719 10.632813 36.40625 10.6875 36.40625 C 11.167969 36.40625 11.574219 36.050781 11.65625 35.5625 C 11.976563 33.625 11.621094 31.683594 11.125 29.65625 C 10.871094 28.777344 10.519531 27.914063 10.21875 27 C 8.796875 22.675781 7.160156 17.796875 9.40625 12.75 C 9.632813 12.246094 10.242188 12.023438 10.75 12.25 C 11.253906 12.476563 11.472656 13.058594 11.25 13.5625 C 9.316406 17.902344 10.722656 22.199219 12.09375 26.375 C 12.191406 26.667969 12.28125 26.960938 12.375 27.25 C 12.644531 26.96875 12.984375 26.6875 13.3125 26.4375 C 14.535156 25.523438 18.878906 20.78125 17.8125 14.3125 C 16.890625 8.722656 11.992188 3.53125 11.78125 3.3125 C 11.589844 3.113281 11.351563 3.007813 11.09375 3 Z M 28.90625 20.09375 C 28.210938 20.09375 27.503906 20.113281 26.8125 20.1875 C 22.15625 20.691406 18.609375 22.480469 16.3125 25.46875 C 12.597656 30.300781 13.523438 36.519531 13.5625 36.78125 C 13.5625 36.792969 13.5625 36.800781 13.5625 36.8125 C 10.578125 39.921875 9.21875 42.652344 9.125 42.84375 C 8.882813 43.339844 9.066406 43.945313 9.5625 44.1875 C 9.703125 44.253906 9.851563 44.28125 10 44.28125 C 10.371094 44.28125 10.734375 44.074219 10.90625 43.71875 C 10.925781 43.679688 12.027344 41.484375 14.40625 38.84375 C 16.65625 36.082031 19.644531 33.007813 23.4375 31.21875 C 29.855469 28.191406 36.566406 28.390625 36.84375 28.40625 C 37.394531 28.425781 37.832031 28.886719 37.8125 29.4375 C 37.792969 29.976563 37.347656 30.40625 36.8125 30.40625 C 36.792969 30.40625 36.902344 30.375 36.5 30.375 C 35.21875 30.375 29.589844 30.542969 24.3125 33.03125 C 20.753906 34.707031 17.902344 37.46875 15.78125 40.125 C 16.097656 40.367188 16.355469 40.515625 16.4375 40.5625 C 16.617188 40.660156 20.855469 42.9375 26.25 42.9375 C 26.929688 42.9375 27.625 42.882813 28.28125 42.8125 C 40.515625 41.464844 46.621094 29.777344 46.875 29.28125 C 47.066406 28.902344 47.007813 28.464844 46.71875 28.15625 C 46.40625 27.828125 39.023438 20.09375 28.90625 20.09375 Z"></path>
    </svg>
  );
};

export default FresLeafIcon;