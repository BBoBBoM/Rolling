import { useCallback, useEffect, useState } from "react";
import ReactionBadge from "../Common/ReactionBadge";
import axios from "axios";
import PropTypes from 'prop-types';

const LIMIT = 8;
const AdditionalReactionContainer = ({ recipientId }) => {
  const RECIPIENT_API = `https://rolling-api.vercel.app/2-5/recipients/${recipientId}/reactions/?limit=${LIMIT}&offset=0`;
  
  const [reactions, setReactions] = useState([]);
  const [url, setUrl] = useState(RECIPIENT_API);

  const getReactions = useCallback(async() => {
    try{
      const response = await axios.get(url);
      const { next, results } = await response.data;
      if(next) setUrl(next);
      setReactions((prev) => [...prev, ...results]);
    } catch(error) {
      alert(error);
    }
  }, [url])

  useEffect(() => {
    getReactions();
  }, [getReactions])

  return(
    <div className="grid grid-rows-2 grid-flow-col border py-6 px-6 absolute top-11 gap-x-2 gap-y-2.5 border-gray-400 rounded-lg right-24 z-10 bg-white">
      {reactions?.slice(0,8).map((reaction) => <ReactionBadge key={reaction.id+reaction.emoji} reaction={reaction} />)}
    </div>
  )
};

AdditionalReactionContainer.propTypes = {
  recipientId: PropTypes.number
}

export default AdditionalReactionContainer;
