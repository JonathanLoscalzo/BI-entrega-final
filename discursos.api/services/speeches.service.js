
var mongoose = require('mongoose')
var speechModel = require('../models/speech.model')

const GetSpeechesWithStatsById = async (id) => await speechModel.aggregate([
    { $match: { "_id": new mongoose.Types.ObjectId(id) } },
    {
        $lookup:
        {
            from: "speeches_stats",
            localField: "_id",
            foreignField: "_id",
            as: "stats"
        }
    },
    {
        $addFields: {
            "stats": { $arrayElemAt: ["$stats", 0] }
        }
    },
    {
        $unwind: "$stats.items"
    },
    {
        $sort: { "stats.items.count": -1 }
    },
    {
        $match: { "stats.items.count": { $gt: "1" } }
    },
    {
        $group: {
            _id: "$_id",
            "title": { $first: "$title" },
            "subtitle": { $first: "$subtitle" },
            "date": { $first: "$date" },
            "content": { $first: "$content" },
            "uri": { $first: "$uri" },
            "total_distict_words": { $first: "$stats.total_distict_words" },
            "items": { $push: "$stats.items" }
        }
    }
]).allowDiskUse(true)

const GetSpeechesWithStats = async () => await speechModel.aggregate([
    {
        $lookup:
        {
            from: "speeches_stats",
            localField: "_id",
            foreignField: "_id",
            as: "stats"
        }
    },
    {
        $addFields: {
            "stats": { $arrayElemAt: ["$stats", 0] }
        }
    },
    {
        $unwind: "$stats.items"
    },
    {
        $sort: { "stats.items.count": -1 }
    },
    {
        $match: { "stats.items.count": { $gt: "1" } }
    },
    {
        $group: {
            _id: "$_id",
            "title": { $first: "$title" },
            "subtitle": { $first: "$subtitle" },
            "date": { $first: "$date" },
            "content": { $first: "$content" },
            "uri": { $first: "$uri" },
            "total_distict_words": { $first: "$stats.total_distict_words" },
            "items": { $push: "$stats.items" }
        }
    }
]).allowDiskUse(true)

module.exports = {
    GetSpeechesWithStats,
    GetSpeechesWithStatsById
}
