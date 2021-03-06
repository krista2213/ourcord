/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */
export class MessageRaw {
    id: string;
    channel_id: string;
    channel_type: number;
    guild_id: string;
    author: object;
    member: object;
    content: string | object;
    timestamp: number;
    tts: boolean;
    mention_everyone: boolean;
    mentions: object;
    mention_roles: object;
    mention_channels: object;
    attachments: object;
    embeds: object;
    reactions: object;
    pinned: boolean;
    type: string;
    stickers: object;
    referenced_message: object;
}
