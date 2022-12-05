import styled from "styled-components";

export const VStack = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: ${(props: StackViewProps) => props.wrap || "nowrap"};
    width: ${(props: StackViewProps) => props.width || "100%"};
    height: ${(props: StackViewProps) => props.height || "100%"};
    margin: ${(props: StackViewProps) => props.margin || "0"};
    padding: ${(props: StackViewProps) => props.padding || "0"};
    align-items: ${(props: StackViewProps) => props.align || "center"};
    justify-content: ${(props: StackViewProps) => props.justify || "center"};
    border: ${(props: StackViewProps) => props.border || "none"};
    border-radius: ${(props: StackViewProps) => props.borderRadius || "0"};
    background: ${(props: StackViewProps) => props.background || "none"};
`;