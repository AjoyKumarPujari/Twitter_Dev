import { response } from "express";
import TweetService from "../services/tweet-service.js";
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        console.log("Inside create tweet");
        return res.status(201).json({
            success: true,
            message: 'Successfully Created a new tweet',
            data: response,
            error:{}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went Wrong",
            data: {},
            err: error
        });
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetcha the tweet',
            data: response,
            error:{}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went Wrong",
            data: {},
            err: error
        });
    }
}