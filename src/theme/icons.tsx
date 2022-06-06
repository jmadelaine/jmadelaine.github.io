/** @jsxImportSource @emotion/react */

import { FC } from 'react'

const Icon: FC<{ viewBox: string }> = ({ viewBox, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox={viewBox}
    fill="currentColor"
    css={{ display: 'block' }}
    aria-hidden={true}
    {...props}
  />
)

export const MenuIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="menu-icon" {...props}>
    <path d="M0,3c0-0.8,0.7-1.5,1.5-1.5h21C23.3,1.5,24,2.2,24,3s-0.7,1.5-1.5,1.5h-21C0.7,4.5,0,3.8,0,3z" />
    <path d="M0,21c0-0.8,0.7-1.5,1.5-1.5h21c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-21C0.7,22.5,0,21.8,0,21z" />
    <path d="M1.5,10.5C0.7,10.5,0,11.2,0,12s0.7,1.5,1.5,1.5h12c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5H1.5z" />
  </Icon>
)

export const MoreVerticalIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="more-icon" {...props}>
    <path d="M15,3c0,1.7-1.3,3-3,3S9,4.7,9,3s1.3-3,3-3S15,1.3,15,3z" />
    <path d="M15,12c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,10.3,15,12z" />
    <path d="M15,21c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,19.3,15,21z" />
  </Icon>
)

export const CloseIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="close-icon" {...props}>
    <path d="m 19.71833,21.60853 c 0.52197,0.521961 1.368233,0.52196 1.890202,0 0.521958,-0.521974 0.521957,-1.368241 1e-6,-1.890215 L 13.89022,11.999977 21.608453,4.2816397 c 0.521957,-0.5219346 0.521957,-1.3682551 -1e-6,-1.8901901 -0.52197,-0.521933 -1.368233,-0.5219336 -1.890189,5e-7 L 12.000043,10.109787 4.2817573,2.3914503 c -0.5219292,-0.521934 -1.3682454,-0.5219328 -1.8901763,4e-7 -0.5219309,0.5219334 -0.5219305,1.368254 -2e-7,1.8901885 l 7.7182862,7.7183378 -7.7184192,7.718338 c -0.5219296,0.521975 -0.5219311,1.368243 3e-7,1.890216 0.5219303,0.521959 1.3682449,0.521961 1.8901756,-2e-6 l 7.7184203,-7.718362 z" />
  </Icon>
)

export const MiniCloseIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="min-close-icon" {...props}>
    <path d="m 6.2348825,16.630998 c -0.3131765,0.313183 -0.3131757,0.82094 0,1.134121 0.3131848,0.313174 0.8209446,0.313174 1.1341293,1e-6 l 4.6310032,-4.630988 4.631002,4.63094 c 0.31316,0.313173 0.820952,0.313173 1.134113,-1e-6 0.31316,-0.313182 0.31316,-0.820939 0,-1.134113 L 13.134128,12.000027 17.76513,7.3690549 c 0.313161,-0.3131572 0.31316,-0.8209474 -10e-7,-1.1341059 -0.313159,-0.3131584 -0.820952,-0.3131577 -1.134112,0 L 12.000014,10.865921 7.3690117,6.234869 c -0.3131851,-0.3131572 -0.820946,-0.3131582 -1.1341302,8e-7 -0.3131752,0.3131581 -0.3131761,0.8209466 1.7e-6,1.1341047 l 4.6310188,4.6310525 z" />
  </Icon>
)

export const SearchIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="search-icon" {...props}>
    <path d="M18.2,16.4c3.1-4,2.8-9.8-0.8-13.4C13.4-1,6.9-1,3,3c-4,4-4,10.4,0,14.4c3.7,3.7,9.4,3.9,13.4,0.8c0,0,0,0,0.1,0.1l5.4,5.4c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8L18.2,16.4C18.2,16.4,18.2,16.4,18.2,16.4z M15.5,4.8c3,3,3,7.8,0,10.8c-3,3-7.8,3-10.8,0c-3-3-3-7.8,0-10.8C7.7,1.8,12.6,1.8,15.5,4.8z" />
  </Icon>
)

export const ChevronLeftIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="chevron-left-icon" {...props}>
    <path d="M19.2,2.4L16.8,0l-12,12l12,12l2.4-2.4L9.6,12L19.2,2.4z" />
  </Icon>
)

export const ChevronRightIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="chevron-right-icon" {...props}>
    <path d="M4.8,2.4L7.2,0l12,12l-12,12l-2.4-2.4l9.6-9.6L4.8,2.4z" />
  </Icon>
)

export const ChevronDownIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="chevron-down-icon" {...props}>
    <path d="M 21.18,4.59 12,13.75 2.82,4.59 0,7.41 l 12,12 12,-12 z" />
  </Icon>
)

export const UserIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="user-icon" {...props}>
    <path d="M12,12c3.3,0,6-2.7,6-6s-2.7-6-6-6S6,2.7,6,6S8.7,12,12,12z M12,15c-4,0-12,2-12,6v3h24v-3 C24,17,16,15,12,15z" />
  </Icon>
)

export const ContactsIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="contacts-icon" {...props}>
    <path d="M 12,24 C 5.3832689,24 -5.2e-7,18.616731 -5.2e-7,12 -5.2e-7,5.3832689 5.3832689,-5.2e-7 12,-5.2e-7 18.616731,-5.2e-7 24,5.3832689 24,12 24,18.616731 18.616731,24 12,24 Z M 12,1.8461534 C 6.4038459,1.8461534 1.8461534,6.4038459 1.8461534,12 1.8461534,17.596154 6.4038459,22.153847 12,22.153847 17.596154,22.153847 22.153847,17.599039 22.153847,12 22.153847,6.4009613 17.599039,1.8461534 12,1.8461534 Z" />
    <path d="m 15.904039,14.076923 c -1.003847,0 -1.973654,-0.445385 -2.731154,-1.253654 A 4.8323079,4.8323079 0 0 1 11.903654,9.8624999 c -0.08481,-1.1942308 0.281538,-2.2932693 1.031538,-3.0934617 0.75,-0.8001923 1.79827,-1.230577 2.968847,-1.230577 1.161923,0 2.213654,0.4396154 2.961346,1.238077 0.747692,0.7984616 1.123269,1.9038462 1.038461,3.0871155 a 4.846154,4.846154 0 0 1 -1.26923,2.9596153 c -0.758077,0.808269 -1.727308,1.253654 -2.730577,1.253654 z M 19.123846,9.8076922 Z M 6.6819228,14.270769 c -1.7169231,0 -3.2267309,-1.587115 -3.3651924,-3.538269 C 3.2457688,9.7332691 3.5561535,8.8096152 4.1919227,8.1317306 4.827692,7.4538459 5.7046151,7.093269 6.6813459,7.093269 c 0.9767308,0 1.853077,0.3715385 2.4848078,1.0465385 0.6317308,0.675 0.9519233,1.6050001 0.8798073,2.5961535 -0.1407688,1.94827 -1.6499996,3.534808 -3.3640382,3.534808 z m 14.8009622,3.456923 c -0.09173,-0.271153 -0.315,-0.560192 -0.762692,-0.83423 -1.353462,-0.826731 -3.018462,-1.264039 -4.816154,-1.264039 -1.763654,0 -3.474808,0.455769 -4.819039,1.283654 C 9.5705768,17.845962 8.5528844,19.206346 8.1426921,20.846539 8.045769,21.2325 7.9044229,21.95077 8.0555767,22.352885 A 11.087308,11.087308 0 0 0 21.483462,17.727692 Z M 6.6709613,20.386731 C 7.0788459,18.759231 7.9471152,17.402308 9.2942306,16.305 A 0.46153848,0.46153848 0 0 0 9.1448075,15.510577 C 8.4524998,15.289615 7.6621152,15.171346 6.6819228,15.171346 c -1.3742308,0 -2.8332693,0.372116 -3.931154,1.04827 -0.3115385,0.192115 -0.6173077,0.265961 -0.8526923,0.33173 a 11.125385,11.125385 0 0 0 4.4873079,4.998462 l 0.1032692,-0.0081 a 5.9319233,5.9319233 0 0 1 0.1823077,-1.155 z" />
  </Icon>
)

export const AddContactIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="add-contact-icon" {...props}>
    <path d="m 15.698278,14.7928 c -1.832775,-0.938206 -4.211019,-1.701862 -6.9710909,-1.701862 -2.760071,0 -5.138315,0.763656 -6.97109,1.701862 -1.09093806,0.556379 -1.756410055,1.680044 -1.756410055,2.901894 V 20.7275 H 17.454687 v -3.032806 c 0,-1.22185 -0.665471,-2.345515 -1.756409,-2.901894 z M 8.7271871,12.000001 c 2.4109719,0 4.3637499,-1.952779 4.3637499,-4.3637508 0,-2.410972 -1.952778,-4.36375 -4.3637499,-4.36375 -2.410971,0 -4.36375,1.952778 -4.36375,4.36375 0,2.4109718 1.952779,4.3637508 4.36375,4.3637508 z M 20.7275,8.7271882 v -2.181875 c 0,-0.600016 -0.490921,-1.090938 -1.090937,-1.090938 v 0 c -0.600016,0 -1.090938,0.490922 -1.090938,1.090938 v 2.181875 H 16.36375 c -0.600016,0 -1.090938,0.490922 -1.090938,1.090938 v 0 c 0,0.6000148 0.490922,1.0909368 1.090938,1.0909368 h 2.181875 v 2.181875 c 0,0.600016 0.490922,1.090937 1.090938,1.090937 v 0 c 0.600016,0 1.090937,-0.490921 1.090937,-1.090937 v -2.181875 h 2.181875 c 0.600016,0 1.090938,-0.490922 1.090938,-1.0909368 v 0 c 0,-0.600016 -0.490922,-1.090938 -1.090938,-1.090938 z" />
  </Icon>
)

export const FolderIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="folder-icon" {...props}>
    <path d="M21.8,4.5h-9l-3-3H2.2C1,1.5,0,2.5,0,3.8v3.8h24V6.8C24,5.5,23,4.5,21.8,4.5z M0,20.2c0,1.2,1,2.2,2.2,2.2h19.5c1.2,0,2.2-1,2.2-2.2V9H0V20.2z" />
  </Icon>
)

export const MailIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="mail-icon" {...props}>
    <path
      fillRule="evenodd"
      d="m 0.0130267,3.7838598 c 0,-0.7363733 0.5969466,-1.3333333 1.3333333,-1.3333333 h 21.320307 c 0.7364,0 1.333333,0.59696 1.333333,1.3333333 V 18.882806 c 0,1.4728 -1.193867,2.666668 -2.666667,2.666668 H 2.6666667 C 1.1939067,21.549474 0,20.355606 0,18.882806 V 4.2161532 c 0,-0.063493 0.00444,-0.1259467 0.0130267,-0.18708 z m 2.65364,2.9650134 V 18.882806 H 21.333333 V 6.7493265 l -6.504666,6.5046795 c -1.562134,1.562133 -4.0948,1.562133 -5.656867,0 z M 4.7630933,5.0740598 H 19.237333 l -6.294266,6.2943472 c -0.520667,0.520667 -1.364934,0.520667 -1.8856,0 z"
    />
  </Icon>
)

export const PlayIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="play-icon" {...props}>
    <path d="M 5.5438663,23.999998 A 2.3067282,2.3067282 0 0 1 4.4025673,23.695436 C 3.6199623,23.25196 3.1334433,22.391093 3.1334433,21.456531 V 2.5435791 c 0,-0.937169 0.486519,-1.79542598 1.269124,-2.23890198 a 2.2910761,2.2910761 0 0 1 2.332816,0.02935 L 22.899433,10.009632 a 2.3478149,2.3478149 0 0 1 0,3.978244 L 6.7327743,23.666091 a 2.3152064,2.3152064 0 0 1 -1.188908,0.33391 z" />
  </Icon>
)

export const PauseIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="pause-icon" {...props}>
    <path d="M 8.727275,24 H 5.454545 A 1.0909091,1.0909091 0 0 1 4.363635,22.90909 V 1.090909 A 1.0909091,1.0909091 0 0 1 5.454545,0 h 3.27273 a 1.0909091,1.0909091 0 0 1 1.09091,1.090909 V 22.90909 A 1.0909091,1.0909091 0 0 1 8.727275,24 Z m 9.81818,0 h -3.27273 a 1.0909091,1.0909091 0 0 1 -1.09091,-1.09091 V 1.090909 A 1.0909091,1.0909091 0 0 1 15.272725,0 h 3.27273 a 1.0909091,1.0909091 0 0 1 1.09091,1.090909 V 22.90909 A 1.0909091,1.0909091 0 0 1 18.545455,24 Z" />
  </Icon>
)

export const SkipBack10Icon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="skip-back-10-icon" {...props}>
    <path d="M12.1,2.8V1c0-0.9-1.1-1.4-1.8-0.8L6.9,3.5c-0.5,0.4-0.5,1.2,0,1.6l3.4,3.2c0.7,0.6,1.8,0.1,1.8-0.8V5.4c4.4,0.1,8,3.8,7.9,8.2c-0.1,4.2-3.6,7.7-7.8,7.8C8,21.5,4.4,18.3,4,14.1c0-0.4-0.4-0.8-0.9-0.8H2.3c-0.5,0-0.9,0.5-0.9,1c0.5,5.5,5.3,9.9,11,9.6c5.5-0.2,10-4.7,10.2-10.2C22.8,7.8,18,2.8,12.1,2.8z" />
    <polygon points="10.3,17.1 10.3,10.7 10.2,10.7 8.9,10.7 7.6,10.7 7.6,11.9 8.9,11.9 8.9,17.1 	" />
    <path d="M12.5,16.8c0.4,0.3,0.9,0.4,1.4,0.4c0.5,0,1-0.1,1.4-0.4c0.4-0.3,0.7-0.7,1-1.2c0.2-0.5,0.4-1.1,0.4-1.7c0-0.7-0.1-1.2-0.4-1.7c-0.2-0.5-0.6-0.9-1-1.2c-0.4-0.3-0.9-0.4-1.4-0.4c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.7,0.7-1,1.2c-0.2,0.5-0.4,1.1-0.4,1.7c0,0.7,0.1,1.2,0.4,1.7C11.8,16.2,12.1,16.6,12.5,16.8z M12.8,12.8c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.2,0.2,0.3,0.4,0.5,0.7s0.2,0.7,0.2,1.1c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.5-0.5,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.5-0.7c-0.1-0.3-0.2-0.7-0.2-1.1C12.6,13.5,12.7,13.1,12.8,12.8z" />
  </Icon>
)

export const SkipForward10Icon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="skip-forward-10-icon" {...props}>
    <path d="M11.9,2.8V1c0-0.9,1.1-1.4,1.8-0.8l3.4,3.2c0.5,0.4,0.5,1.2,0,1.6l-3.4,3.2c-0.7,0.6-1.8,0.1-1.8-0.8V5.4c-4.4,0.1-8,3.8-7.9,8.2c0.1,4.2,3.6,7.7,7.8,7.8c4.3,0.1,7.8-3.1,8.2-7.2c0-0.4,0.4-0.8,0.9-0.8h0.9c0.5,0,0.9,0.5,0.9,1c-0.5,5.5-5.3,9.9-11,9.6c-5.5-0.2-10-4.7-10.2-10.2C1.2,7.8,6,2.8,11.9,2.8z" />
    <polygon points="10.3,17.1 10.3,10.7 10.2,10.7 8.9,10.7 7.6,10.7 7.6,11.9 8.9,11.9 8.9,17.1 	" />
    <path d="M12.5,16.8c0.4,0.3,0.9,0.4,1.4,0.4c0.5,0,1-0.1,1.4-0.4c0.4-0.3,0.7-0.7,1-1.2c0.2-0.5,0.4-1.1,0.4-1.7c0-0.7-0.1-1.2-0.4-1.7c-0.2-0.5-0.6-0.9-1-1.2c-0.4-0.3-0.9-0.4-1.4-0.4c-0.5,0-1,0.1-1.4,0.4c-0.4,0.3-0.7,0.7-1,1.2c-0.2,0.5-0.4,1.1-0.4,1.7c0,0.7,0.1,1.2,0.4,1.7C11.8,16.2,12.1,16.6,12.5,16.8z M12.8,12.8c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.2,0.2,0.3,0.4,0.5,0.7s0.2,0.7,0.2,1.1c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.5-0.5,0.7c-0.2,0.2-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.5-0.7c-0.1-0.3-0.2-0.7-0.2-1.1C12.6,13.5,12.7,13.1,12.8,12.8z" />
  </Icon>
)

export const VolumeHighIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="volume-high-icon" {...props}>
    <path d="M 3e-7,8.0000001 V 16 H 5.3333335 L 12,22.666666 V 1.3333336 L 5.3333335,8.0000001 Z M 18,12 C 18,9.6400001 16.64,7.6133334 14.666667,6.6266668 V 17.36 C 16.64,16.386667 18,14.36 18,12 Z M 14.666667,0.30666696 V 3.0533336 C 18.52,4.2000002 21.333333,7.7733334 21.333333,12 c 0,4.226667 -2.813333,7.8 -6.666666,8.946666 v 2.746667 C 20.013333,22.48 24,17.706667 24,12 24,6.2933335 20.013333,1.5200003 14.666667,0.30666696 Z" />
  </Icon>
)

export const VolumeLowIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="volume-low-icon" {...props}>
    <path d="M 18,12 C 18,9.6400001 16.64,7.6133334 14.666667,6.6266668 V 17.36 C 16.64,16.386667 18,14.36 18,12 Z M 3e-7,8.0000001 V 16 H 5.3333335 L 12,22.666666 V 1.3333336 L 5.3333335,8.0000001 Z" />
  </Icon>
)

export const VolumeMuteIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="volume-mute-icon" {...props}>
    <path d="M 18,12 C 18,9.6400001 16.64,7.6133334 14.666667,6.6266668 V 9.5733334 L 17.933333,12.84 C 17.973333,12.573333 18,12.293333 18,12 Z m 3.333333,0 c 0,1.253333 -0.266667,2.426667 -0.72,3.52 l 2.013333,2.013333 C 23.506666,15.88 24,14 24,12 24,6.2933335 20.013333,1.5200003 14.666667,0.30666696 V 3.0533336 C 18.52,4.2000002 21.333333,7.7733334 21.333333,12 Z M 1.6933336,3e-7 3e-7,1.6933336 6.3066668,8.0000001 H 3e-7 V 16 H 5.3333335 L 12,22.666666 V 13.693333 L 17.666667,19.36 c -0.893334,0.693333 -1.893334,1.24 -3,1.573333 V 23.68 c 1.84,-0.413334 3.506666,-1.266667 4.919999,-2.413334 L 22.306666,24 24,22.306666 12,10.306667 Z M 12,1.3333336 9.2133334,4.1200002 12,6.9066668 Z" />
  </Icon>
)

export const CaptionsIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="captions-icon" {...props}>
    <path d="M 21.333333,2.666667 H 2.6666666 C 1.19375,2.666667 0,3.860417 0,5.3333336 V 18.666667 c 0,1.472917 1.19375,2.666666 2.6666666,2.666666 H 21.333333 C 22.80625,21.333333 24,20.139584 24,18.666667 V 5.3333336 C 24,3.860417 22.804167,2.666667 21.333333,2.666667 Z m 0.666667,16 c 0,0.367583 -0.299083,0.666667 -0.666667,0.666667 H 2.6666666 C 2.2990833,19.333334 2,19.03425 2,18.666667 V 5.3333336 C 2,4.9657504 2.2990833,4.666667 2.6666666,4.666667 H 21.333333 C 21.700917,4.666667 22,4.9657504 22,5.3333336 Z M 9.8541666,10.5875 c 0.3906254,0.390625 1.0233334,0.390625 1.4141664,0 0.390625,-0.390625 0.390625,-1.0233331 0,-1.4141663 -1.5599997,-1.56 -4.0962495,-1.56 -5.6541662,0 -0.76,0.7516667 -1.1766667,1.7600003 -1.1766667,2.8266673 0,1.066666 0.3791665,2.072916 1.1716666,2.828333 0.7799999,0.78 1.8033333,1.17 2.8279167,1.17 1.0245833,0 2.0483336,-0.389959 2.8279166,-1.17 0.390625,-0.390625 0.390625,-1.023334 0,-1.414167 -0.390625,-0.390625 -1.023333,-0.390625 -1.4141666,0 -0.77875,0.78 -2.0495835,0.78 -2.8279167,0 C 6.6458333,13.0375 6.4375001,12.533334 6.4375001,12.000001 c 0,-0.533334 0.2083332,-1.036667 0.5858333,-1.414167 0.7808333,-0.781667 2.0516667,-0.781667 2.8308332,0.0017 z m 8.0000004,0 c 0.390625,0.390625 1.023333,0.390625 1.414166,0 0.390625,-0.390625 0.390625,-1.0233331 0,-1.4141663 -1.56,-1.56 -4.09625,-1.56 -5.654166,0 -0.76,0.7516667 -1.176667,1.7600003 -1.176667,2.8266673 0,1.066666 0.379167,2.072916 1.171667,2.828333 0.78,0.78 1.803333,1.17 2.827916,1.17 1.024584,0 2.048334,-0.389959 2.827917,-1.17 0.390625,-0.390625 0.390625,-1.023334 0,-1.414167 -0.390625,-0.390625 -1.023333,-0.390625 -1.414166,0 -0.778751,0.78 -2.049584,0.78 -2.827917,0 C 14.645833,13.0375 14.4375,12.533334 14.4375,12.000001 c 0,-0.533334 0.208333,-1.036667 0.585833,-1.414167 0.780834,-0.781667 2.051667,-0.781667 2.830834,0.0017 z" />
  </Icon>
)

export const DownloadIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="download-icon" {...props}>
    <path d="M10.5,1.5C10.5,0.7,11.2,0,12,0s1.5,0.7,1.5,1.5v10.7l4.9-4.9l2.1,2.1L12,18L3.5,9.5l2.1-2.1l4.9,4.9V1.5z" />
    <path d="M0,15h3v6h18v-6h3v6c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V15z" />
  </Icon>
)

export const UploadIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="upload-icon" {...props}>
    <path d="M10.5,16.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V5.7l4.9,4.9l2.1-2.1L12,0L3.5,8.5l2.1,2.1l4.9-4.9V16.5z" />
    <path d="M0,15h3v6h18v-6h3v6c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V15z" />
  </Icon>
)

export const ThumbUpIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="thumb-up-icon" {...props}>
    <path d="M0.3,12.8c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2v9c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V12.8z" />
    <path d="M6.3,12.5v8.1c0,1.1,0.6,2.2,1.7,2.7l0.1,0c0.8,0.4,1.8,0.6,2.7,0.6h8.1c1.4,0,2.7-1,2.9-2.4l1.8-9c0.4-1.9-1-3.6-2.9-3.6h-5.3V3c0-1.7-1.3-3-3-3c-0.8,0-1.5,0.7-1.5,1.5v1c0,1.3-0.4,2.6-1.2,3.6L7.5,8.9C6.8,9.9,6.3,11.2,6.3,12.5z" />
  </Icon>
)

export const ThumbDownIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="thumb-down-icon" {...props}>
    <path d="M0.3,2.2c0-1.2,1-2.2,2.2-2.2s2.2,1.1,2.2,2.2v9c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V2.2z" />
    <path d="M7.5,15.2L9.6,18c0.8,1,1.2,2.2,1.2,3.6v0.9c0,0.9,0.6,1.5,1.5,1.5c1.7,0,3-1.3,3-3v-6h5.4c1.9,0,3.3-1.8,3-3.6l-1.8-9c-0.3-1.4-1.5-2.4-3-2.4h-8.1C9.9,0,8.8,0.1,8.1,0.6l0,0C7,1.1,6.4,2.1,6.4,3.3v8.1C6.3,12.8,6.7,14.1,7.5,15.2z" />
  </Icon>
)

export const CheckFilledIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="check-filled-icon" {...props}>
    <path d="M 12,0 C 5.3454545,0 0,5.3454545 0,12 0,18.654545 5.3454545,24 12,24 18.654545,24 24,18.654545 24,12 24,5.3454545 18.654545,0 12,0 Z m -1.963636,16.690909 -4.5818185,-4.581818 1.5272727,-1.527273 3.0545458,3.054546 6.218181,-6.2181822 1.527273,1.5272727 z" />
  </Icon>
)

export const CommentIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="comment-icon" {...props}>
    <path d="M6,23.1c-0.5,0-0.9-0.4-0.9-0.9v-3.4H3.9C1.7,18.9,0,17.1,0,15V4.7c0-2.1,1.7-3.9,3.9-3.9h16.3c2.1,0,3.9,1.7,3.9,3.9V15c0,2.1-1.7,3.9-3.9,3.9h-8.7l-4.9,4.1C6.4,23.1,6.2,23.1,6,23.1z" />
  </Icon>
)

export const MarkupIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="markup-icon" {...props}>
    <path d="M 12 0 A 12 12 0 0 0 0 12 A 12 12 0 0 0 12 24 A 12 12 0 0 0 24 12 A 12 12 0 0 0 23.277344 8.0019531 L 21.5 8.0019531 L 21.5 9.0136719 A 10 10 0 0 1 22 12 A 10 10 0 0 1 18.574219 19.494141 L 17.072266 10.998047 L 14.863281 10.998047 L 12.052734 6.0761719 L 9.1367188 10.998047 L 7.03125 10.998047 L 5.34375 19.423828 A 10 10 0 0 1 2 12 A 10 10 0 0 1 12 2 A 10 10 0 0 1 14.9375 2.5 L 16 2.5 L 16 0.71875 A 12 12 0 0 0 12 0 z M 18 0 L 18 2.1015625 L 18 4 L 17.099609 4 L 14 4 L 14 6.0019531 L 18 6.0019531 L 18 10.001953 L 19.900391 10.001953 L 20 10.001953 L 20 6.0019531 L 20.900391 6.0019531 L 24 6.0019531 L 24 4 L 20 4 L 20 0 L 18 0 z M 8.7382812 13.001953 L 15.164062 13.001953 L 16.054688 21.111328 A 10 10 0 0 1 12 22 A 10 10 0 0 1 7.9375 21.107422 L 8.7382812 13.001953 z " />
  </Icon>
)

export const OptionsIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="options-icon" {...props}>
    <path d="M5.3,0.7c2.5,0,4.6,1.7,5.2,4h10.8v2.7H10.5c-0.6,2.3-2.7,4-5.2,4C2.4,11.3,0,8.9,0,6S2.4,0.7,5.3,0.7zM5.3,8.7C6.8,8.7,8,7.5,8,6S6.8,3.3,5.3,3.3S2.7,4.5,2.7,6S3.9,8.7,5.3,8.7z" />
    <path d="M18.7,23.3c-2.5,0-4.6-1.7-5.2-4H2.7v-2.7h10.8c0.6-2.3,2.7-4,5.2-4c2.9,0,5.3,2.4,5.3,5.3S21.6,23.3,18.7,23.3z M18.7,20.7c1.5,0,2.7-1.2,2.7-2.7s-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7S17.2,20.7,18.7,20.7z" />
  </Icon>
)

export const VideoIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="video-icon" {...props}>
    <path d="M4.8,20v-1.6c0-0.4-0.4-0.8-0.8-0.8H2.4c-0.4,0-0.8,0.4-0.8,0.8V20c0,0.4,0.4,0.8,0.8,0.8H4C4.4,20.8,4.8,20.4,4.8,20zM4.8,15.2v-1.6c0-0.4-0.4-0.8-0.8-0.8H2.4c-0.4,0-0.8,0.4-0.8,0.8v1.6C1.6,15.6,2,16,2.4,16H4C4.4,16,4.8,15.6,4.8,15.2z M4.8,10.4V8.8C4.8,8.4,4.4,8,4,8H2.4C2,8,1.6,8.4,1.6,8.8v1.6c0,0.4,0.4,0.8,0.8,0.8H4C4.4,11.2,4.8,10.8,4.8,10.4z M17.6,20v-6.4c0-0.4-0.4-0.8-0.8-0.8H7.2c-0.4,0-0.8,0.4-0.8,0.8V20c0,0.4,0.4,0.8,0.8,0.8h9.6C17.2,20.8,17.6,20.4,17.6,20z M4.8,5.6V4c0-0.4-0.4-0.8-0.8-0.8H2.4C2,3.2,1.6,3.6,1.6,4v1.6C1.6,6,2,6.4,2.4,6.4H4C4.4,6.4,4.8,6,4.8,5.6z M22.4,20v-1.6c0-0.4-0.4-0.8-0.8-0.8H20c-0.4,0-0.8,0.4-0.8,0.8V20c0,0.4,0.4,0.8,0.8,0.8h1.6C22,20.8,22.4,20.4,22.4,20z M17.6,10.4V4c0-0.4-0.4-0.8-0.8-0.8H7.2C6.8,3.2,6.4,3.6,6.4,4v6.4c0,0.4,0.4,0.8,0.8,0.8h9.6C17.2,11.2,17.6,10.8,17.6,10.4z M22.4,15.2v-1.6c0-0.4-0.4-0.8-0.8-0.8H20c-0.4,0-0.8,0.4-0.8,0.8v1.6c0,0.4,0.4,0.8,0.8,0.8h1.6C22,16,22.4,15.6,22.4,15.2z M22.4,10.4V8.8C22.4,8.4,22,8,21.6,8H20c-0.4,0-0.8,0.4-0.8,0.8v1.6c0,0.4,0.4,0.8,0.8,0.8h1.6C22,11.2,22.4,10.8,22.4,10.4z M22.4,5.6V4c0-0.4-0.4-0.8-0.8-0.8H20c-0.4,0-0.8,0.4-0.8,0.8v1.6c0,0.4,0.4,0.8,0.8,0.8h1.6C22,6.4,22.4,6,22.4,5.6z M24,3.6v16.8c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V3.6c0-1.1,0.9-2,2-2h20C23.1,1.6,24,2.5,24,3.6z" />
  </Icon>
)

export const AudioIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="audio-icon" {...props}>
    <path d="M12,0C5.4,0,0,5.4,0,12v9.3C0,22.8,1.2,24,2.7,24H8V13.3H2.7V12c0-5.2,4.2-9.3,9.3-9.3s9.3,4.2,9.3,9.3v1.3H16V24h5.3c1.5,0,2.7-1.2,2.7-2.7V12C24,5.4,18.6,0,12,0z" />
  </Icon>
)

export const ImageIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="image-icon" {...props}>
    <path d="M9,8.2c0,1.2-1,2.2-2.3,2.2s-2.3-1-2.3-2.2S5.5,6,6.8,6S9,7,9,8.2z" />
    <path d="M3,1.5c-1.7,0-3,1.3-3,3v15c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3v-15c0-1.7-1.3-3-3-3C21,1.5,3,1.5,3,1.5z M21,3c0.8,0,1.5,0.7,1.5,1.5v9.8l-5.7-2.9c-0.3-0.1-0.6-0.1-0.9,0.1L10.4,17l-4-2.7c-0.3-0.2-0.7-0.2-0.9,0.1l-4,3.5V4.5C1.5,3.7,2.2,3,3,3H21z" />
  </Icon>
)

export const DocumentIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="document-icon" {...props}>
    <path d="M21.1,4.4l-3.5-3.5C17.1,0.3,16.3,0,15.5,0H5C3.3,0,2,1.3,2,3l0,18c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V6.5C22,5.7,21.7,4.9,21.1,4.4z M19.7,21c0,0.4-0.3,0.8-0.7,0.8H5c-0.4,0-0.7-0.3-0.8-0.7l0-18c0-0.4,0.3-0.8,0.8-0.8h9.5V6c0,0.8,0.7,1.5,1.5,1.5h3.7V21z" />
  </Icon>
)

export const EnterFullscreenIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="enter-fullscreen-icon" {...props}>
    <path d="M0,0h8v2.7H2.7V8H0V0z" />
    <path d="M0,24h8v-2.7H2.7V16H0V24z" />
    <path d="M16,24h8v-8h-2.7v5.3H16V24z" />
    <path d="M24,0h-8v2.7h5.3V8H24V0z" />
  </Icon>
)

export const ExitFullscreenIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="exit-fullscreen-icon" {...props}>
    <path d="M8,8H0V5.3h5.3V0H8V8z" />
    <path d="M8,16H0v2.7h5.3V24H8V16z" />
    <path d="M24,16h-8v8h2.7v-5.3H24V16z" />
    <path d="M16,8h8V5.3h-5.3V0H16V8z" />
  </Icon>
)

export const LightThemeIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="light-theme-icon" {...props}>
    <path d="M 12 0 A 1.5 1.5 0 0 0 10.5 1.5 L 10.5 3.1386719 A 9 9 0 0 0 6.8007812 4.6796875 L 5.6367188 3.515625 A 1.5 1.5 0 0 0 3.515625 3.515625 A 1.5 1.5 0 0 0 3.515625 5.6367188 L 4.6796875 6.8007812 A 9 9 0 0 0 3.1386719 10.5 L 1.5 10.5 A 1.5 1.5 0 0 0 0 12 A 1.5 1.5 0 0 0 1.5 13.5 L 3.1386719 13.5 A 9 9 0 0 0 4.6796875 17.199219 L 3.515625 18.363281 A 1.5 1.5 0 0 0 3.515625 20.484375 A 1.5 1.5 0 0 0 5.6367188 20.484375 L 6.8007812 19.320312 A 9 9 0 0 0 10.5 20.861328 L 10.5 22.5 A 1.5 1.5 0 0 0 12 24 A 1.5 1.5 0 0 0 13.5 22.5 L 13.5 20.861328 A 9 9 0 0 0 17.199219 19.320312 L 18.363281 20.484375 A 1.5 1.5 0 0 0 20.484375 20.484375 A 1.5 1.5 0 0 0 20.484375 18.363281 L 19.320312 17.199219 A 9 9 0 0 0 20.861328 13.5 L 22.5 13.5 A 1.5 1.5 0 0 0 24 12 A 1.5 1.5 0 0 0 22.5 10.5 L 20.871094 10.5 A 9 9 0 0 0 19.333984 6.7871094 L 20.484375 5.6367188 A 1.5 1.5 0 0 0 20.484375 3.515625 A 1.5 1.5 0 0 0 18.363281 3.515625 L 17.212891 4.6660156 A 9 9 0 0 0 13.5 3.1289062 L 13.5 1.5 A 1.5 1.5 0 0 0 12 0 z M 12 5.25 A 6.75 6.75 0 0 1 18.75 12 A 6.75 6.75 0 0 1 12 18.75 A 6.75 6.75 0 0 1 5.25 12 A 6.75 6.75 0 0 1 12 5.25 z " />
  </Icon>
)

export const DarkThemeIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="dark-theme-icon" {...props}>
    <path d="m 8.4933333,3.3466667 c -0.24,0.8533333 -0.36,1.7466666 -0.36,2.6533333 0,5.44 4.4266667,9.866667 9.8666667,9.866667 0.906667,0 1.8,-0.12 2.653333,-0.36 C 19.266667,18.92 15.906667,21.333333 12,21.333333 6.8533333,21.333333 2.6666667,17.146667 2.6666667,12 2.6666667,8.0933333 5.08,4.7333333 8.4933333,3.3466667 Z M 12,0 C 5.3733333,0 0,5.3733333 0,12 0,18.626667 5.3733333,24 12,24 18.626667,24 24,18.626667 24,12 24,11.386667 23.946667,10.773333 23.866667,10.186667 22.56,12.013333 20.426667,13.2 18,13.2 14.026667,13.2 10.8,9.9733333 10.8,6 10.8,3.5866667 11.986667,1.44 13.813333,0.13333333 13.226667,0.05333333 12.613333,0 12,0 Z" />
  </Icon>
)

export const ListIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="list-icon" {...props}>
    <path d="M4.8,0H0v4.8h4.8V0z" />
    <path d="M0,14.4V9.6h4.8v4.8H0z" />
    <path d="M0,19.2V24h4.8v-4.8H0z" />
    <path d="M9.6,19.2V24H24v-4.8H9.6z" />
    <path d="M24,14.4V9.6H9.6v4.8H24z" />
    <path d="M24,0v4.8H9.6V0H24z" />
  </Icon>
)

export const StackIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="stack-icon" {...props}>
    <path d="M 21.333333,13.333333 H 2.6666669 C 1.2000003,13.333333 3e-7,14.533333 3e-7,16 v 5.333333 C 3e-7,22.8 1.2000003,24 2.6666669,24 H 21.333333 C 22.8,24 24,22.8 24,21.333333 V 16 c 0,-1.466667 -1.2,-2.666667 -2.666667,-2.666667 z m 0,8 H 2.6666669 V 16 H 21.333333 Z" />
    <path d="M 21.333333,3e-7 H 2.6666669 C 1.2000003,3e-7 3e-7,1.2000003 3e-7,2.6666669 v 5.3333332 c 0,1.4666666 1.2,2.6666669 2.6666666,2.6666669 H 21.333333 C 22.8,10.666667 24,9.4666667 24,8.0000001 V 2.6666669 C 24,1.2000003 22.8,3e-7 21.333333,3e-7 Z m 0,7.9999998 H 2.6666669 V 2.6666669 H 21.333333 Z" />
  </Icon>
)

export const GridIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="grid-icon" {...props}>
    <path d="M9.6,0H0v9.6h9.6V0z" />
    <path d="M9.6,14.4H0V24h9.6V14.4z" />
    <path d="M14.4,14.4H24V24h-9.6V14.4z" />
    <path d="M24,0h-9.6v9.6H24V0z" />
  </Icon>
)

export const EyeOpenIcon: FC = props => (
  <Icon viewBox="0 0 512 512" data-tid="eye-open-icon" {...props}>
    <circle cx="256" cy="256" r="64" />
    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
  </Icon>
)

export const EyeClosedIcon: FC = props => (
  <Icon viewBox="0 0 512 512" data-tid="eye-closed-icon" {...props}>
    <path d="M 262.31445 192.31445 L 319.68555 249.68555 A 64 64 0 0 0 262.31445 192.31445 z M 192.46289 262.46289 A 64 64 0 0 0 249.53711 319.53711 L 192.46289 262.46289 z " />
    <path d="M 255.66016 96 C 229.8866 96 204.38215 100.5361 179.38867 109.38867 L 233.73438 163.73438 A 96 96 0 0 1 352 256 A 96.11 96.11 0 0 1 348.87305 278.87305 L 422.00391 352.00391 C 448.22011 330.13477 471.70093 303.47248 490.93945 273.35938 A 32.2 32.2 0 0 0 490.83984 238.59961 C 464.37984 197.67961 430.05031 162.92031 391.57031 138.07031 C 349.00031 110.55031 302.00016 96 255.66016 96 z M 91.113281 161.11328 C 66.081455 182.19275 42.824716 207.90892 21.710938 238.17969 A 31.92 31.92 0 0 0 21.070312 273.7207 C 47.480312 315.0507 81.469609 349.85914 119.34961 374.36914 C 161.99961 401.99914 207.90016 416 255.66016 416 C 281.58422 416 307.62551 411.53918 332.91797 402.91797 L 278.87305 348.87305 A 96.11 96.11 0 0 1 256 352 A 96 96 0 0 1 163.73438 233.73438 L 91.113281 161.11328 z " />
    <path d="M 40,10 500,470 470,500 10,40 Z" />
  </Icon>
)

export const LockClosedIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="lock-closed-icon" {...props}>
    <path d="m 12,-2.5e-7 c -3.787097,0 -6.857143,3.07004555 -6.857143,6.85714265 v 3.4285716 c -1.893542,0 -3.428571,1.534972 -3.428571,3.428571 v 6.857143 C 1.714286,22.465028 3.249315,24 5.142857,24 h 13.714286 c 1.8936,0 3.428571,-1.534972 3.428571,-3.428572 v -6.857143 c 0,-1.893599 -1.534971,-3.428571 -3.428571,-3.428571 V 6.8571424 C 18.857143,3.0700453 15.787086,-2.5e-7 12,-2.5e-7 Z M 12,2.285714 c 2.524686,0 4.571429,2.046697 4.571429,4.5714284 V 10.285714 H 7.428572 V 6.8571424 C 7.428572,4.332411 9.475269,2.2857139 12,2.285714 Z" />
  </Icon>
)

export const LockOpenIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="lock-open-icon" {...props}>
    <path d="M 12 -0.001953125 C 8.212903 -0.001953125 5.1425781 3.0683716 5.1425781 6.8554688 L 5.1425781 10.285156 C 3.2490353 10.285156 1.7148437 11.821244 1.7148438 13.714844 L 1.7148438 20.572266 C 1.7148437 22.465866 3.2490353 24 5.1425781 24 L 18.857422 24 C 20.751021 24 22.285156 22.465866 22.285156 20.572266 L 22.285156 13.714844 C 22.285156 11.821244 20.751021 10.285156 18.857422 10.285156 L 8.5722656 10.285156 L 7.4277344 10.285156 L 7.4277344 6.8554688 C 7.4277344 4.3307372 9.475315 2.2851562 12 2.2851562 C 14.524686 2.2851562 16.570312 4.3307372 16.570312 6.8554688 L 18.855469 6.8554688 C 18.855469 3.0683716 15.787086 -0.001953125 12 -0.001953125 z M 5.1425781 12.572266 L 18.857422 12.572266 C 19.488622 12.572266 20 13.083644 20 13.714844 L 20 20.572266 C 20 21.203466 19.488622 21.714844 18.857422 21.714844 L 5.1425781 21.714844 C 4.511401 21.714844 4 21.203466 4 20.572266 L 4 13.714844 C 4 13.083644 4.511401 12.572266 5.1425781 12.572266 z " />
  </Icon>
)

export const SendIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="send-icon" {...props}>
    <path d="m 22.112323,10.706614 -0.0073,-0.0032 L 2.528685,2.583739 A 1.0799348,1.0799343 0 0 0 1.5106315,2.682749 1.1298978,1.1298973 0 0 0 1.0000003,3.626545 v 5.192944 a 1.1001033,1.1001028 0 0 0 0.8947504,1.080393 l 10.6769603,1.974226 a 0.18335055,0.18335047 0 0 1 0,0.360284 L 1.8952087,14.208618 a 1.1001033,1.1001028 0 0 0 -0.8952084,1.079476 v 5.19386 a 1.0803932,1.0803927 0 0 0 0.4854202,0.902543 1.0973531,1.0973526 0 0 0 0.6059733,0.18335 1.125314,1.1253135 0 0 0 0.4363752,-0.08847 l 19.575879,-8.07338 0.0087,-0.0041 a 1.4668044,1.4668038 0 0 0 0,-2.695252 z" />
  </Icon>
)

export const TaskIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="task-icon" {...props}>
    <path d="M19.6,21.9V4.4h-2.1v3.3h-11V4.4H4.4v17.5H19.6z M12,2.2c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1 S12.6,2.2,12,2.2z M19.6,2.2c1.2,0,2.2,1,2.2,2.1v17.5c0,1.2-1,2.1-2.2,2.1H4.4c-1.2,0-2.2-1-2.2-2.1V4.3c0-1.2,1-2.1,2.2-2.1h4.6 C9.4,0.9,10.6,0,12,0s2.6,0.9,3.1,2.2L19.6,2.2L19.6,2.2z" />
  </Icon>
)

export const MultiselectIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="multiselect-icon" {...props}>
    <path d="M10.5,16.6L5.8,12l1.5-1.5l3.1,3.1l6.2-6.2l1.5,1.5L10.5,16.6z" />
    <path
      fillRule="evenodd"
      d="M0,12C0,5.4,5.4,0,12,0c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12C5.4,24,0,18.6,0,12z M12,21.8c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8C21.8,17.4,17.4,21.8,12,21.8z"
    />
  </Icon>
)

export const DragIndicatorIcon: FC = props => (
  <Icon viewBox="0 0 24 24" data-tid="drag-indicator-icon" {...props}>
    <path d="m 10.5,21 c 0,1.65 -1.35,3 -3,3 -1.65,0 -3,-1.35 -3,-3 0,-1.65 1.35,-3 3,-3 1.65,0 3,1.35 3,3 z M 7.5,9 c -1.65,0 -3,1.35 -3,3 0,1.65 1.35,3 3,3 1.65,0 3,-1.35 3,-3 0,-1.65 -1.35,-3 -3,-3 z m 0,-9 c -1.65,0 -3,1.35 -3,3 0,1.65 1.35,3 3,3 1.65,0 3,-1.35 3,-3 0,-1.65 -1.35,-3 -3,-3 z m 9,6 c 1.65,0 3,-1.35 3,-3 0,-1.65 -1.35,-3 -3,-3 -1.65,0 -3,1.35 -3,3 0,1.65 1.35,3 3,3 z m 0,3 c -1.65,0 -3,1.35 -3,3 0,1.65 1.35,3 3,3 1.65,0 3,-1.35 3,-3 0,-1.65 -1.35,-3 -3,-3 z m 0,9 c -1.65,0 -3,1.35 -3,3 0,1.65 1.35,3 3,3 1.65,0 3,-1.35 3,-3 0,-1.65 -1.35,-3 -3,-3 z" />{' '}
  </Icon>
)