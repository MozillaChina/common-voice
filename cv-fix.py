import re
from pypinyin import lazy_pinyin

with open('sentence-collector.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

lines = [line.strip() for line in lines]

def get_chinese_char_count(text):
    # 使用正则表达式去除标点符号
    text = re.sub(r'[^\u4e00-\u9fa5]', '', text)
    text = lazy_pinyin(text)
    return len(text)

unique_lines = set(lines)
unique_lines = list(unique_lines)
unique_lines.sort(key=lambda x: (get_chinese_char_count(x), lazy_pinyin(x)))

with open('sentence-collector-washed.txt', 'w', encoding='utf-8') as f:
    for line in unique_lines:
        f.write(line + '\n')
