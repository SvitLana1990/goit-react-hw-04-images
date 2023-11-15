import { Button, ButtonContainer } from "./Button.styled"

export const LoadMoreButton = ({onClick}) => {
    return (
        <ButtonContainer>
            <Button type="button" onClick={onClick}>Load More</Button>
        </ButtonContainer>
    )
}