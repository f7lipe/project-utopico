import styled from "styled-components"

interface ShimmerProps {
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    margin?: string | number
    padding?: string | number
    border?: string | number
    widthMobile?: string | number
    heightMobile?: string | number
    borderRadiusMobile?: string | number
    marginMobile?: string | number
    paddingMobile?: string | number
    borderMobile?: string | number
}

export const Shimmer = styled.div`
    width: ${(props: ShimmerProps) => props.width || "100%"};
    height: ${(props: ShimmerProps) => props.height || "100%"};
    border-radius: ${(props: ShimmerProps) => props.borderRadius || "0"};
    margin: ${(props: ShimmerProps) => props.margin || "0"};
    padding: ${(props: ShimmerProps) => props.padding || "0"};
    border: ${(props: ShimmerProps) => props.border || "none"};
    background-color: #80808011;
    display:inline-block;
    -webkit-mask:linear-gradient(-60deg,#838383 30%,#aeaeae54,#bebebe 70%) right/300% 100%;
    background-repeat: no-repeat;
    animation: shimmer 1s infinite;
    transition: all 1.5s ease-in;
  
    @keyframes shimmer {
        100% {-webkit-mask-position:left}
    } 
`

