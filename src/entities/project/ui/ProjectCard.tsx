import React from 'react';
import { Badge } from '@/shared/ui';
import { Project } from '../model';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ProjectCard = ({ description, tags, name, image, link, roles }: Project) => {
  return (
    <li className="w-full rounded-lg border-2 border-gray-700 overflow-hidden mb-6 transition-all group-hover/list:opacity-50 hover:opacity-100">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} 프로젝트 보기`}
        className="group/card"
      >
        <div className="relative h-70 lg:h-48">
          {/* 배경 이미지 */}
          <Image
            className="object-cover aspect-video w-full"
            src={image}
            alt={`${name} 페이지`}
            fill
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />
        </div>
        <div className="px-6 pb-6 -mt-3 relative bg-gradient-to-b from-black/80 to-black z-0">
          {/* 제목 */}
          <h3 className="font-medium leading-snug mb-2">
            <span className="inline-flex items-baseline leading-tight text-base group-hover/card:text-primary">
              {name}
              <span className="inline-block align-bottom">
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1 translate-y-px" />
              </span>
            </span>
          </h3>
          {/* 설명 텍스트 */}
          <p className="leading-relaxed mb-3">{description}</p>
          <ul className="flex flex-col text-sm leading-normal mb-3">
            {roles.map((role, index) => (
              <li key={index}>• {role}</li>
            ))}
          </ul>
          {/* 기능 태그들 */}
          <ul className="flex flex-wrap gap-2 w-full">
            {tags.map((tag) => (
              <Badge name={tag} key={tag} />
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
};
