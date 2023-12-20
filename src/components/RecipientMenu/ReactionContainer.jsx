import ReactionBadge from "../Common/ReactionBadge";
import { LuSmilePlus } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";
import EmojiPicker from 'emoji-picker-react';
import AdditionalReactionContainer from "./AdditionalReactionContainer";
import PropTypes from 'prop-types';
import axios from "axios";
import { useParams } from "react-router";

const LIMIT = 8;

const ReactionContainer = ({ recipientId }) => {
  const [additionalReactionOpen, setAdditionalReactionOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { id } = useParams();
  const RECIPIENT_API = `https://rolling-api.vercel.app/2-5/recipients/${id}/reactions/?limit=${LIMIT}&offset=0`;
  
  const [reactions, setReactions] = useState([]);
  const [url, setUrl] = useState(RECIPIENT_API);

  const getReactions = useCallback(async() => {
    try{
      const response = await axios.get(url);
      const { next, results } = await response.data;
      if(next) setUrl(next);
      setReactions((prev) => {
        const uniqueResults = results.filter(newItem => !prev.some(item => item.id === newItem.id));
        return [...prev, ...uniqueResults];
      });
    } catch(error) {
      alert(error);
    }
  }, [url])

  useEffect(() => {
    getReactions();
  }, [getReactions, url])

  const handleClickAdditionalReaction = () => {
    setAdditionalReactionOpen(!additionalReactionOpen);
    setEmojiPickerOpen(false);
  }

  const handleClickAddButton = () => {
    setEmojiPickerOpen(!emojiPickerOpen);
    setAdditionalReactionOpen(false);
  };

  const handleAddReaction = (value) => {
    setReactions((prev) => {
      const isEmojiExist = prev.some((reaction) => reaction.emoji === value);
      if(!isEmojiExist) return [...prev, { emoji: value, count: 1}].sort((a, b) => b.count - a.count);
      return prev.map((reaction) => {
        if(reaction.emoji === value) return {...reaction, count: reaction.count + 1};
        return reaction;
      }).sort((a, b) => b.count - a.count);
    })
    postReaction(value);
    setEmojiPickerOpen(!emojiPickerOpen);
  }

  const postReaction = async(emoji) => {
    const url = `https://rolling-api.vercel.app/2-5/recipients/${id}/reactions/`
    try{
      await axios.post(url, {
        emoji: emoji,
        type: 'increase'
      })
    } catch(error) {
      alert(error);
    }
  };

  return(
    <div className="flex md:gap-2 relative">
      <div className="flex">
        <div className="flex items-center justify-center gap-2">
          {reactions?.slice(0,3).map((reaction) => <ReactionBadge key={reaction.emoji} reaction={reaction} />)}
        </div>
        <button className="py-1.5 px-1.5" onClick={handleClickAdditionalReaction}><IoIosArrowDown className="w-6 h-6"/></button>
      </div>
      <button className="flex justify-center items-center py-1.5 px-2 md:px-4 gap-1 border rounded-md border-gray-300" onClick={handleClickAddButton}>
        <LuSmilePlus className="w-6 h-6"/>
        <p className="hidden text-base md:flex">추가</p>
      </button>
      {additionalReactionOpen && <AdditionalReactionContainer recipientId={recipientId}/>}
      {emojiPickerOpen && <div className="absolute top-11 left-4 z-10"><EmojiPicker onEmojiClick={(value) => handleAddReaction(value.emoji)} width={307} height={393}/></div>}
    </div>
  )
};

ReactionContainer.propTypes = {
  topReactions: PropTypes.array,
  recipientId: PropTypes.number
}

export default ReactionContainer;
