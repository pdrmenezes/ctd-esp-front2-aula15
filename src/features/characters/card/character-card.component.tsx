import { Character } from "features/characters";
import { FC } from "react";
import { FollowingButtonComponent } from "features/following/button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { addCharacterToFollowingList, removeCharacterToFollowingList } from "features/following/following.slices";
import { Card, StyledCard, StyledCardImage } from "features/card";
import CardBody, { StyledCardBody } from "features/card/card-body.component";

export type CharacterCardProps = {
  character: Character;
};

const CharacterCardComponent: FC<CharacterCardProps> = ({ character }: CharacterCardProps) => {
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  const onToggleFavorite = (setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };
  return (
    <StyledCard>
      <StyledCardImage src={character.image} alt={character.name} />
      <StyledCardBody>
        <span>{character.name}</span>
        <FollowingButtonComponent isFav={followingIds.indexOf(character.id) >= 0} onToggleFavorite={onToggleFavorite} />
      </StyledCardBody>
    </StyledCard>
  );
};

export default CharacterCardComponent;
