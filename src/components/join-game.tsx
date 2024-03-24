'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Player } from '@/lib/player';

export default function JoinGame({
    onJoin,
}: {
    onJoin: (player: Player) => void;
}) {
    const images = [
        '/images/avatars/ape-avatar.jpg',
        '/images/avatars/cat-avatar.webp',
        '/images/avatars/worker-avatar.jpg',
        '/images/avatars/clown-avatar.webp',
        '/images/avatars/i-love-poker.jpg',
        '/images/avatars/poker-player.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const formSchema = z.object({
        playerName: z.string().min(2).max(12),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            playerName: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const socket = new WebSocket(process.env.websocketUrl!);
        socket.addEventListener('error', (event) => {
            console.error('Websocket error', event);
        });

        socket.addEventListener('open', () => {
            const joinRequest = [
                'join-request',
                JSON.stringify({
                    name: values.playerName,
                    avatar: selectedImage,
                }),
            ];
            socket.send(JSON.stringify(joinRequest));
        });

        socket.addEventListener('message', (event) => {
            const messageParts = JSON.parse(event.data);
            const messageType = messageParts[0];
            if (messageType === 'join-response') {
                const player = JSON.parse(messageParts[1]);
                onJoin(player);
            }
            console.log('Message from server ', event.data);
        });
    }

    const imageAvatars = [];
    for (const image of images) {
        imageAvatars.push(
            <Avatar
                key={image}
                className={`h-14 w-14 cursor-pointer ${selectedImage === image ? 'border-4 border-green-400' : ''} `}
            >
                <AvatarImage
                    src={image}
                    height={56}
                    width={56}
                    className='relative aspect-square object-cover'
                    onClick={() => setSelectedImage(image)}
                />
            </Avatar>
        );
    }

    return (
        <main className='flex h-[100dvh] w-[100dvw] items-center'>
            <div className='mx-auto w-full max-w-xl'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8'
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Welcome to 234Poker</CardTitle>
                                <CardDescription>Join a game</CardDescription>
                            </CardHeader>
                            <CardContent className='space-y-8'>
                                <FormField
                                    control={form.control}
                                    name='playerName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    Select an Avatar
                                </p>
                                <div className='grid grid-cols-6 gap-4'>
                                    {imageAvatars}
                                </div>
                            </CardContent>
                            <CardFooter className='mt-4'>
                                <Button type='submit' className='mx-auto'>
                                    Join
                                </Button>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </div>
        </main>
    );
}
