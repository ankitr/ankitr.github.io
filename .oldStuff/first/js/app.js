var quotes = [['If passion drives you, let reason hold the reins.', 'Benjamin Franklin'],
              ['Sometimes the heart sees what is invisible to the eye.', 'H. Jackson Brown, Jr.'],
              ['Try not to become a man of success, but rather try to become a man of value.', 'Albert Einstein'],
              ['The true sign of intelligence is not knowledge but imagination.', 'Albert Einstein'],
              ['Reason from first principles.', 'Elon Musk'],
              ['The greatness of art is not to find what is common but what is unique.', 'Isaac Bashevis Singer'],
              ['Men must live and create. Live to the point of tears.', 'Albert Camus'],
              ['I attribute my success to this: I never gave or took any excuse.', 'Florence Nightingale'],
              ['The past is a ghost, the future a dream. All we ever have is now.', 'Bill Cosby'],
              ['We become what we think about.', 'Earl Nightingale'],
              ['Your time is limited, so don\'t waste it living someone else\'s life.', 'Steve Jobs'],
              ['The two most important days in your life are the day you are born and the day you find out why.', 'Mark Twain'],
              ['We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', 'Plato'],
              ['Start where you are. Use what you have.  Do what you can.', 'Arthur Ashe'],
              ['I would rather die of passion than of boredom.', 'Vincent van Gogh'],
              ['Dream big and dare to fail.', 'Norman Vaughan'],
              ['The only way to do great work is to love what you do.', 'Steve Jobs'],
              ['If you can dream it, you can achieve it.', 'Zig Ziglar']];

var quote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementsByTagName('q')[0].innerText = quote[0];
document.getElementsByTagName('cite')[0].innerText = quote[1];