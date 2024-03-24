import React from "react";

export const Arrow: React.FC = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='42'
            viewBox='0 0 22 42'
            fill='none'
        >
            <g filter='url(#filter0_iiii_51_43693)'>
                <path
                    d='M22 0H0V32H2V34H4V36H6V38H8V40H10V42H12V40H14V38H16V36H18V34H20V32H22V0Z'
                    fill='#B8C0C1'
                />
            </g>
            <defs>
                <filter
                    id='filter0_iiii_51_43693'
                    x='0'
                    y='0'
                    width='22'
                    height='42'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='BackgroundImageFix'
                        result='shape'
                    />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dy='2' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                    <feBlend mode='normal' in2='shape' result='effect1_innerShadow_51_43693' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='2' dy='-2' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
                    <feBlend
                        mode='normal'
                        in2='effect1_innerShadow_51_43693'
                        result='effect2_innerShadow_51_43693'
                    />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='-2' dy='-2' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.482353 0 0 0 0 0.490196 0 0 0 0 0.513726 0 0 0 1 0'
                    />
                    <feBlend
                        mode='normal'
                        in2='effect2_innerShadow_51_43693'
                        result='effect3_innerShadow_51_43693'
                    />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                    />
                    <feOffset dx='-2' dy='-2' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
                    <feBlend
                        mode='normal'
                        in2='effect3_innerShadow_51_43693'
                        result='effect4_innerShadow_51_43693'
                    />
                </filter>
            </defs>
        </svg>
    );
};
